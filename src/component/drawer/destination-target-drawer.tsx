import { Info, MapPinned, ShoppingCart } from "lucide-react"
import React from "react";
import { useNavigate } from "react-router-dom";
import { DrawerContext } from "../../context-provider/drawer-context-provider";
import { DestinationDataContext } from "../../context-provider/destinationdata-context-provider";

export default function DestinationTargetDrawer() {
  const usenavigate = useNavigate()
  const { setDrawerKind } = React.useContext(DrawerContext);
  const { destinationData } = React.useContext(DestinationDataContext);

  return (
    <div className="w-full my-4 mx-2 overflow-auto">
      <div className="w-full flex xl:flex-row flex-col items-start justify-between xl:space-x-10 xl:space-y-0 md:space-y-10 space-y-0">

        {/* galery showcase */}
        <div className="xl:w-[50%] w-full space-y-4">
          <div className="w-full aspect-5/3 bg-gray-300 rounded-md overflow-hidden">
            <img src={`https://drive.google.com/thumbnail?id=${destinationData?.blogimage}`} alt="image blog overview" className="w-full content-center object-cover" />
          </div>
          <div className="w-full md:flex items-center xl:justify-start space-x-2 hidden">
            {destinationData?.routes?.map((_route, routeidx) => (
              <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" key={routeidx} />
            ))}
          </div>
        </div>

        <div className="xl:w-[50%] w-full xl:aspect-8/6 flex flex-col xl:justify-between justify-start xl:px-5 px-2 space-y-5 xl:space-y-0">
          <h1 className="xl:text-2xl text-xl text-center">{destinationData?.name}</h1>
          <p className="text-justify text-[12px] md:text-sm">
            {destinationData?.desc}
          </p>
          <div className="space-y-0 xl:px-5 px-2 hidden md:flex md:flex-col md:space-y-1">
            {destinationData?.terms?.map((term, termidx) => (
              <div className="flex items-center space-x-1 text-sm" key={termidx}>
                <div className="w-[10%]">
                  <Info className="w-4 h-4" />
                </div>
                <div className="w-[90%]">
                  <p>{term.term_title}</p>
                  <p className="text-[10px]">{term.term_desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <p>{destinationData?.price}</p>
            <p>{destinationData?.status}</p>
          </div>
          <div className="w-full space-y-2">
            <div
              onClick={() => {
                setDrawerKind(null)
                usenavigate(`/destination/${destinationData?._id}`);
              }}
              className="bg-yellow-400 text-white flex justify-center items-center space-x-2 p-2 rounded-md cursor-pointer"
            >
              <MapPinned className="w-5 h-5" />
              <p>Lihat Detail</p>
            </div>
            <div className="bg-green-600 text-white flex justify-center items-center space-x-2 p-2 rounded-md cursor-pointer">
              <ShoppingCart className="w-5 h-5" />
              <button>Hubungi Dan Pesan Sekarang</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
