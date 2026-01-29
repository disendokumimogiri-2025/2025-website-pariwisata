import { Instagram, LogIn, MapPinned, Menu, X, Youtube } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationBar() {
    const [open, setOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const usenavigate = useNavigate();

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`
                fixed top-0 left-0 w-full z-50 px-4 py-4 transition-all duration-300
                overflow-hidden
                ${scrolled
                    ? "bg-black/50 backdrop-blur-md shadow-md"
                    : "dark-green-pallate"
                }
            `}
        >
            {/* Top bar */}
            <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="w-fit flex items-center gap-3 cursor-pointer" onClick={() => usenavigate("/")}>
                    <div className="w-12 h-12 md:w-14 md:h-14">
                        <img
                            src="/logo-lumbung-mataraman.png"
                            alt="logo"
                            className="w-full h-full rounded-full"
                        />
                    </div>
                    <div className="font-comfortaa leading-tight">
                        <p className="text-white text-xl">Lumbung Mataraman</p>
                        <p className="text-[#d0a23e] text-xl">Sriharjo</p>
                    </div>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-8 text-white font-medium">
                    <div className="hover:text-[#d0a23e] cursor-pointer transition" onClick={() => usenavigate("/marketplace")}>
                        Wisata Kuliner
                    </div>
                    <div className="hover:text-[#d0a23e] cursor-pointer transition" onClick={() => usenavigate("/edu")}>
                        Edukasi
                    </div>
                </div>

                {/* Login */}
                <div
                    className="hidden md:flex gap-2 text-white font-medium hover:text-[#d0a23e] cursor-pointer transition"
                    onClick={() => usenavigate("/admin/login")}
                >
                    <LogIn />
                    <p>Login Admin</p>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            <div
                className={`
                    md:hidden overflow-hidden transition-all duration-300
                    ${open ? "max-h-80 mt-4" : "max-h-0"}
                `}
            >
                <div className="flex flex-col pt-6 gap-5 text-white font-medium">
                    <div className="hover:text-[#d0a23e] cursor-pointer" onClick={() => usenavigate("/marketplace")}>
                        Wisata Kuliner
                    </div>
                    <div className="hover:text-[#d0a23e] cursor-pointer" onClick={() => usenavigate("/edu")}>
                        Edukasi
                    </div>
                    <div
                        className="hover:text-[#d0a23e] cursor-pointer"
                        onClick={() => usenavigate("/admin/login")}
                    >
                        Login Admin
                    </div>
                </div>
            </div>
        </div>
    );
}

function FooterNavigation() {
    const usenavigate = useNavigate();

    return (
        <div className='w-full h-fit shade-black-pallate p-10 flex flex-col gap-10 md:flex-row md:justify-between'>
            {/* branding */}
            <div className='w-full h-full flex flex-col gap-10'>
                <div className='flex items-center gap-4'>
                    <div className="w-24 h-24">
                        <img
                            src="/logo-lumbung-mataraman.png"
                            alt="logo"
                            className="w-full h-full rounded-full"
                        />
                    </div>
                    <div className='text-2xl text-white font-comfortaa'>
                        <h1>Lumbung Mataraman</h1>
                        <h2 className='text-[#d0a23e]'>Sriharjo</h2>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <div className='text-white flex items-center gap-2 cursor-pointer'>
                        <Instagram className='hover:text-[#d0a23e] transition' />
                        <p className='hover:text-[#d0a23e] transition'>Instagram</p>
                    </div>
                    <div className='text-white flex items-center gap-2 cursor-pointer'>
                        <MapPinned className='hover:text-[#d0a23e] transition' />
                        <p className='hover:text-[#d0a23e] transition'>Lokasi</p>
                    </div>
                    <div className='text-white flex items-center gap-2 cursor-pointer'>
                        <Youtube className='hover:text-[#d0a23e] transition' />
                        <p className='hover:text-[#d0a23e] transition'>Youtube</p>
                    </div>
                </div>
            </div>

            {/* service */}
            <div className='w-full h-full flex flex-col gap-10'>
                <div className='text-white space-y-5'>
                    <h2 className='text-2xl'>Layanan Lumbung Mataraman</h2>
                    <div className='space-y-4'>
                        <div onClick={() => usenavigate("/marketplace")} className='hover:text-[#d0a23e] transition cursor-pointer'>Agrowisata</div>
                        <div onClick={() => usenavigate("/edu")} className='hover:text-[#d0a23e] transition cursor-pointer'>Edukasi dan Publikasi</div>
                        <div onClick={() => usenavigate("/souvenir")} className='hover:text-[#d0a23e] transition cursor-pointer'>Souvenir</div>
                        <div onClick={() => usenavigate("/")} className='hover:text-[#d0a23e] transition cursor-pointer'>Informasi Terkini</div>
                    </div>
                </div>
            </div>

            {/* sponsor */}
            <div className='w-full h-full flex flex-col gap-10 md:items-center'>
                <div className='text-white space-y-5'>
                    <h2 className='text-2xl'>Sponsor</h2>
                    <div className='space-y-4'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-full min-h-screen'>
            {/* navbar */}
            <div className='w-full h-fit'>
                <NavigationBar />
            </div>

            {children}

            {/* footer */}
            <FooterNavigation />
        </div>
    );
}
