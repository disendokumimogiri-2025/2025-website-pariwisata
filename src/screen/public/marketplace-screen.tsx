import MainLayout from "@/components/main-layout"
import GalleryView from "@/components/public/marketplace/gallery-view";
import GridView from "@/components/public/marketplace/grid-view";
import { useFetchMarketPlaceData } from "@/hooks/connection-hook/public-connection";
import { GalleryHorizontalEnd, LayoutGrid } from "lucide-react";
import React from "react";

enum LayoutViewEnum {
  gallery = "gallery",
  grid = "grid",
}

export default function MarketplaceScreen() {
  const [selectedlayout, setSelectedlayout] = React.useState<LayoutViewEnum>(LayoutViewEnum.gallery);
  const { data, error, loading } = useFetchMarketPlaceData();

  if (loading) return <div>Loading {error}</div>

  return (
    <MainLayout>
      <div className="min-h-screen off-white-pallate pt-[35vw] sm:pt-[24vw] md:pt-[12vw] lg:pt-[8vw] pb-20">
        <div className="min-h-screen w-full flex flex-col justify-center items-center md:justify-start">
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
              ? <GridView data={data?.blogs} />
              : <GalleryView data={data?.blogs} />
          }
        </div>
      </div>
    </MainLayout>
  );
}
