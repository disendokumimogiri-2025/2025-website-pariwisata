import { BetweenHorizonalEnd, House, MapPlus, Microscope, Utensils } from "lucide-react";
import MainLayout from "../component/main-layout"
import React from "react";
import HomeSection from "../component/admin/home-section";
import ContentSection from "../component/admin/content-section";
import CulinarySection from "../component/admin/culinary-section";
import EducationSection from "../component/admin/education-section";

enum DashboardOptionKind {
    content = "content",
    education = "education",
    culinary = "culinary",
    home = "home"
}

interface AdminSectionScreenInterfaceList {
    name: DashboardOptionKind;
    component: React.ReactNode;
}

interface AdminSectionSidebarInterface {
    label: string;
    name: DashboardOptionKind;
    icon: React.ReactNode;
}

const AdminSections: AdminSectionScreenInterfaceList[] = [
    { name: DashboardOptionKind.home, component: <HomeSection /> },
    { name: DashboardOptionKind.content, component: <ContentSection /> },
    { name: DashboardOptionKind.culinary, component: <CulinarySection /> },
    { name: DashboardOptionKind.education, component: <EducationSection /> },
]

const AdminSidebarContents: AdminSectionSidebarInterface[] = [
    { label: 'Home', name: DashboardOptionKind.home, icon: <House className="w-4 h-4" /> },
    { label: 'Paket Wisata', name: DashboardOptionKind.content, icon: <MapPlus className="w-4 h-4" /> },
    { label: 'Konten Kuliner', name: DashboardOptionKind.culinary, icon: <Utensils className="w-4 h-4" /> },
    { label: 'Konten Riset', name: DashboardOptionKind.education, icon: <Microscope className="w-4 h-4" /> },
]


export default function AdminDashboardScreen() {
    const [option, setOption] = React.useState<DashboardOptionKind>(DashboardOptionKind.home);
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

    return (
        <MainLayout needProtection={true}>
            <div className="relative flex min-h-screen">

                {isSidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-30 md:hidden"
                        onClick={() => setIsSidebarOpen(false)}
                    />
                )}

                <aside
                    className={`
                    fixed md:static z-40
                    top-0 left-0
                    h-full
                    w-[75vw] sm:w-[60vw] md:w-[28vw] lg:w-[20vw]
                    bg-white
                    border-r
                    transform transition-transform duration-300
                    ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
                    md:translate-x-0
                `}
                >
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-8">
                            <h1 className="font-semibold">Admin Dashboard</h1>

                            <button
                                className="md:hidden p-1 hover:bg-gray-200 rounded"
                                onClick={() => setIsSidebarOpen(false)}
                            >
                                <BetweenHorizonalEnd />
                            </button>
                        </div>

                        <div className="flex flex-col gap-2">
                            {AdminSidebarContents.map((item, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => {
                                        setOption(item.name)
                                        setIsSidebarOpen(false)
                                    }}
                                    className="flex items-center gap-2 p-2 hover:bg-gray-200 rounded-md cursor-pointer"
                                >
                                    {item.icon}
                                    <p>{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>

                <main className="flex-1">

                    <div className="md:hidden flex items-center p-3 border-b">
                        <button
                            className="p-2 hover:bg-gray-200 rounded"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <BetweenHorizonalEnd />
                        </button>
                        <h2 className="ml-3 font-medium">Dashboard</h2>
                    </div>

                    <div className="p-4 h-[calc(100vh-56px)] md:h-screen overflow-y-auto">
                        {AdminSections.find(c => c.name === option)?.component}
                    </div>
                </main>
            </div>
        </MainLayout>
    );
}
