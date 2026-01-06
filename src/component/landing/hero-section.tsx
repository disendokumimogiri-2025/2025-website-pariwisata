import { TentTree } from "lucide-react";

export function TitleComponent() {
    return (
        <div
            className="
                bg-white p-3 rounded-md flex items-center justify-center space-x-3
                shadow-xl cursor-pointer
                transition-all duration-300 delay-75
                hover:shadow-2xl hover:-translate-y-0.5
                text-sm 
            "
        >
            <TentTree className="transition-transform duration-300 delay-75 hover:scale-110" />
            <h1 className="transition-colors duration-300 delay-75">
                Lumbung Mataraman (ANGGIT SUKI)
            </h1>
        </div>
    );
}

export default function HeroSection() {
  return (
    <div className="w-full h-screen">
      <div className="px-10 py-10 md:px-16 md:py-24 xl:px-24 xl:py-20 w-full h-full flex flex-col items-center justify-center space-y-8">
        <TitleComponent />
        <div className="gap-y-3 flex flex-col items-center">
          <h2 className="md:text-4xl text-2xl font-semibold text-white md:mb-5 mb-1 text-center">
            Lumbung Mataraman Agrowisata Imogiri Bantul Sebagai Tempat Edukasi Wisata dan Kuliner
          </h2>

          <div className="md:text-[15px] text-[10px] text-white text-center">
            <p>Pengalaman agrowisata, paket wisata penelitian, dan angkringan sebagai</p>
            <p>hasil dari proses edukasi dan wisata.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
