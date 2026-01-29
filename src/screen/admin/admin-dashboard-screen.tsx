import N8NSection from "@/components/admin/automatiosation/n8n-section"
import Report2digitalscannerSection from "@/components/admin/automatiosation/report2digitalscanner-section"
import TelegramSection from "@/components/admin/automatiosation/telegram-section"
import AnnouncementSection from "@/components/admin/comp-profile/announcement-section"
import GallerySection from "@/components/admin/comp-profile/gallery-section"
import LandingPageSection from "@/components/admin/comp-profile/landing-page-section"
import PrivacyPolicySection from "@/components/admin/comp-profile/privacy-policy-section"
import EdukasiSection from "@/components/admin/konten-blog/edukasi-section"
import KulinerSection from "@/components/admin/konten-blog/kuliner-section"
import PaketWisataSection from "@/components/admin/konten-blog/paket-wisata-setion"
import BlogSection from "@/components/admin/projects/blog-section"
import CompetitionSection from "@/components/admin/projects/competition-section"
import SouvenirSection from "@/components/admin/projects/souvenir-section"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { AdminCreateEditContext } from "@/context-provider/context-provider-type"
import { useFetchAllDataForAdmin } from "@/hooks/connection-hook/admin-connection"
import { DashboardOptionEnum } from "@/types/data-types"
import React from "react"

export interface AdminSectionInterface {
  name: DashboardOptionEnum;
  component: React.ReactNode;
}

export default function AdminDashboardScreen() {
  const [option, setOption] = React.useState<DashboardOptionEnum>(DashboardOptionEnum.paketwisata);

  const listcontent: AdminSectionInterface[] = [
    { name: DashboardOptionEnum.paketwisata, component: <PaketWisataSection /> },
    { name: DashboardOptionEnum.kuliner, component: <KulinerSection /> },
    { name: DashboardOptionEnum.edukasi, component: <EdukasiSection /> },

    { name: DashboardOptionEnum.landingpage, component: <LandingPageSection /> },
    { name: DashboardOptionEnum.announcement, component: <AnnouncementSection /> },
    { name: DashboardOptionEnum.privacypol, component: <PrivacyPolicySection /> },

    { name: DashboardOptionEnum.blog, component: <BlogSection /> },

    { name: DashboardOptionEnum.n8n, component: <N8NSection /> },
    { name: DashboardOptionEnum.report2digitalscanner, component: <Report2digitalscannerSection /> },
    { name: DashboardOptionEnum.telegram, component: <TelegramSection /> },

    { name: DashboardOptionEnum.souvenir, component: <SouvenirSection /> },
    { name: DashboardOptionEnum.competition, component: <CompetitionSection /> },
    { name: DashboardOptionEnum.gallery, component: <GallerySection /> },
  ]

  const active = listcontent.find(c => c.name === option);

  const { refetch } = useFetchAllDataForAdmin();
  const { flag, setFlag } = React.useContext(AdminCreateEditContext);

  return (
    <SidebarProvider>
      <AppSidebar setOption={setOption} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink>
                    Admin Lumbung Mataraman
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage
                    className="underline cursor-pointer"
                    onClick={() => {
                      refetch();
                      setFlag(!flag);
                    }}
                  >
                    Refresh Data
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {active?.component ?? null}
      </SidebarInset>
    </SidebarProvider>
  )
}
