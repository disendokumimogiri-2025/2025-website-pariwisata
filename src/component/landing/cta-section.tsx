import { Route } from "lucide-react";

export default function CTASection() {
    return (
        <div className="w-full h-screen flex flex-col justify-center item-center px-5 md:px-10 xl:px-12">
            <h1 className="md:text-4xl text-2xl font-semibold text-white md:mb-2 mb-1 text-center">Agrowisata Lumbung Mataraman</h1>
            <div className="w-full flex justify-center items-center my-5">
                <h2 className="md:text-xl text-white text-center xl:w-[50%] md:w-[80%]">
                    Dari Kebun Langsung ke Meja Makan. Nikmati Kuliner Khas di Angkringan Lumbung Mataraman.
                </h2>
            </div>
            <div className="w-full flex justify-center items-center my-5">
                <div
                    className="
                        bg-white p-3 rounded-md flex items-center justify-center space-x-3
                        shadow-xl cursor-pointer
                        transition-all duration-300 delay-75
                        hover:shadow-2xl hover:-translate-y-0.5
                        text-sm 
                    "
                >
                    <Route className="transition-transform duration-300 delay-75 hover:scale-110" />
                    <h1 className="transition-colors duration-300 delay-75">
                        Jelajahi Paket Wisata
                    </h1>
                </div>
            </div>
        </div>
    );
}
