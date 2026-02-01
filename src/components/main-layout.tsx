import { CustomerContext } from '@/context-provider/context-provider-type';
import { Instagram, LogIn, MapPinned, Menu, ShoppingBag, X, Youtube } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

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

                    <div className='grid grid-cols-4 xl:h-[16vw] gap-2'>

                        <div className='h-32 xl:h-20 w-full col-span-4 flex justify-center items-center'>
                            <img
                                src="./public/images/sponsor-sriharjo.png"
                                alt="sponsor-sriharjo"
                                className='h-full max-h-24 xl:max-h-16 object-contain'
                            />
                        </div>

                        <div className='h-32 xl:h-20 w-full col-span-4 flex justify-center items-center'>
                            <img
                                src="./public/images/sponsor-dana-keistimewaan.png"
                                alt="sponsor-keistimewaan"
                                className='h-full max-h-24 xl:max-h-16 object-contain'
                            />
                        </div>

                        <div className='h-32 xl:h-20 w-full col-span-4 xl:col-span-2 flex justify-center items-center'>
                            <img
                                src="./public/images/sponsor-desa-praneur.png"
                                alt="sponsor-despranur"
                                className='h-full max-h-24 xl:max-h-16 object-contain'
                            />
                        </div>

                        <div className='h-32 xl:h-20 w-full col-span-4 xl:col-span-2 flex justify-center items-center'>
                            <img
                                src="./public/images/sponsor-bumdes.png"
                                alt="sponsor-bumdes"
                                className='h-full max-h-24 xl:max-h-16 object-contain'
                            />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const { setName, bookItem, setMessages, name, messages } = React.useContext(CustomerContext);

    return (
        <div className="w-full min-h-screen relative">
            {/* Navbar */}
            <NavigationBar />

            {children}

            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="default"
                        className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 shadow-lg flex items-center justify-center">
                        <ShoppingBag className="w-7 h-7" />
                    </Button>
                </SheetTrigger>

                <SheetContent className="flex flex-col">
                    <SheetHeader>
                        <SheetTitle>Pengajuan Pemesanan</SheetTitle>
                        <SheetDescription>
                            Silakan lengkapi data pemesanan Anda. Tim kami akan menghubungi Anda
                            setelah pengajuan diterima.
                        </SheetDescription>
                    </SheetHeader>

                    {/* CONTENT */}
                    <div className="flex-1 overflow-y-auto mt-6 space-y-6 px-10">
                        {/* Identitas Pemesan */}
                        <div className="space-y-2">
                            <h3 className="text-sm font-semibold text-muted-foreground">
                                Identitas Pemesan
                            </h3>
                            <Input
                                placeholder="Nama Anda"
                                value={name ?? ""}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        {/* Daftar Item */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold text-muted-foreground">
                                Item Pesanan
                            </h3>

                            {bookItem && bookItem.length > 0 ? (
                                <div className="space-y-3">
                                    {bookItem.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center justify-between rounded-lg border p-3"
                                        >
                                            <div>
                                                <p className="font-medium">{item.name}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    {item.priceOffered}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-sm text-muted-foreground border rounded-lg p-4 text-center">
                                    Belum ada item yang dipilih
                                </div>
                            )}
                        </div>

                        {/* Catatan */}
                        <div className="space-y-2">
                            <h3 className="text-sm font-semibold text-muted-foreground">
                                Catatan Tambahan
                            </h3>
                            <Textarea
                                placeholder="Tulis catatan atau kebutuhan khusus..."
                                value={messages ?? ""}
                                onChange={(e) => setMessages(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* FOOTER ACTION */}
                    <div className="border-t pt-4 space-y-2 px-10">
                        <Button
                            className="w-full"
                            disabled={!name || !bookItem || bookItem.length === 0}
                        >
                            Ajukan Pemesanan
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                            Dengan mengajukan pemesanan, Anda menyetujui untuk dihubungi oleh tim kami.
                        </p>
                    </div>
                </SheetContent>

            </Sheet>

            <FooterNavigation />
        </div>
    );
}
