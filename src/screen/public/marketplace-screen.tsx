import MainLayout from "@/components/main-layout"
import GalleryView from "@/components/public/marketplace/gallery-view";
import GridView from "@/components/public/marketplace/grid-view";
import { GalleryHorizontalEnd, LayoutGrid, ScanSearch } from "lucide-react";
import React from "react";

enum LayoutViewEnum {
  gallery = "gallery",
  grid = "grid",
}

export default function MarketplaceScreen() {
  const [selectedlayout, setSelectedlayout] = React.useState<LayoutViewEnum>(LayoutViewEnum.gallery);
  return (
    <MainLayout>
      <div className="min-h-screen off-white-pallate pt-[35vw] sm:pt-[24vw] md:pt-[12vw] lg:pt-[8vw]">
        <div className="w-full pt-10 flex flex-col items-center">
          <h1 className="text-3xl max-w-3xl text-center font-comfortaa font-semibold">
            Destinasi Wisata dan Kuliner Lumbung Mataraman Sriharjo
          </h1>
          <div className="w-full flex items-center justify-center md:mt-24 md:mb-36 mt-20 mb-32">
            <div className="w-full flex items-center justify-center md:space-x-5 px-5">
              <input
                type="text" name="search" id="search"
                className="bg-white p-3 rounded-md md:text-lg border border-[#27422d]/90 xl:w-[50%] md:w-[60%] w-screen"
                onInput={() => { }}
              />
              <ScanSearch className="transition-transform duration-300 delay-75 hover:scale-110 text-[#27422d] h-10 w-10 cursor-pointer hidden md:flex" />
            </div>
          </div>
          <div className="bg-white min-h-screen w-full flex flex-col justify-center items-center md:justify-start py-8 md:py-10">
            <div className="w-full px-8 md:px-5 xl:px-10">
              <div className="flex w-full border border-gray-300 p-3 items-center justify-between rounded-md mb-10 bg-white">
                <p className="text-sm flex items-center space-x-1">
                  <span className="hidden md:flex">Tampilan </span>
                  <span className="capitalize">{selectedlayout}</span>
                </p>
                <div className="flex items-center space-x-5">
                  <GalleryHorizontalEnd className="cursor-pointer" onClick={() => setSelectedlayout(LayoutViewEnum.gallery)} />
                  <LayoutGrid className="cursor-pointer" onClick={() => setSelectedlayout(LayoutViewEnum.grid)} />
                </div>
              </div>
            </div>
            {
              selectedlayout === LayoutViewEnum.grid
                ? <GridView />
                : <GalleryView />
            }
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
