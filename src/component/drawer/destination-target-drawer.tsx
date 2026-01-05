import { Info, MapPinned, ShoppingCart } from "lucide-react"
import React from "react";
import { useNavigate } from "react-router-dom";
import { DrawerContext } from "../../context-provider/drawer-context-provider";
import { DestinationDataContext } from "../../context-provider/destinationdata-context-provider";

export default function DestinationTargetDrawer() {
  const usenavigate = useNavigate()
  const { setDrawerKind } = React.useContext(DrawerContext);
  const { _selectedId } = React.useContext(DestinationDataContext);

  return (
    <div className="w-full my-4 mx-2 overflow-auto">
      <div className="w-full flex xl:flex-row flex-col items-start justify-between xl:space-x-10 xl:space-y-0 md:space-y-10 space-y-0">

        {/* galery showcase */}
        <div className="xl:w-[50%] w-full space-y-4">
          <div className="w-full aspect-5/3 bg-gray-300 rounded-md" />
          <div className="w-full md:flex items-center xl:justify-start space-x-2 hidden">
            <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" />
            <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" />
            <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" />
            <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" />
            <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" />
            <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" />
          </div>
        </div>

        <div className="xl:w-[50%] w-full xl:aspect-8/6 flex flex-col xl:justify-between justify-start xl:px-5 px-2 space-y-5 xl:space-y-0">
          <h1 className="xl:text-2xl text-xl text-center">Occaecat exercitation mollit sunt ipsum aliquip culpa pariatur.</h1>
          <p className="text-justify text-[12px] md:text-sm">
            Nostrud sunt culpa amet minim velit non eiusmod.
            Duis consequat eu velit ex non commodo ullamco consectetur adipisicing.
            Minim deserunt velit proident ullamco.
            Cupidatat ullamco nisi aute proident.
          </p>
          <div className="space-y-0 xl:px-5 px-2 hidden md:flex md:flex-col md:space-y-1">
            <div className="flex items-center space-x-1 text-sm">
              <Info className="w-4 h-4" />
              <p>Sunt aliqua deserunt consequat consequat ut.</p>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Info className="w-4 h-4" />
              <p>Sunt aliqua deserunt consequat consequat ut.</p>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Info className="w-4 h-4" />
              <p>Sunt aliqua deserunt consequat consequat ut.</p>
            </div>
            <div className="flex items-center space-x-1 text-sm">
              <Info className="w-4 h-4" />
              <p>Sunt aliqua deserunt consequat consequat ut.</p>
            </div>
          </div>
          <div>
            <p>Sunt aliqua</p>
            <p>Sunt aliqua</p>
          </div>
          <div className="w-full space-y-2">
            <div
              onClick={() => {
                setDrawerKind(null)
                usenavigate(`/destination/${_selectedId}`);
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
