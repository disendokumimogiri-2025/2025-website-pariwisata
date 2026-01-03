import { Info, MapPinned, ShoppingCart } from "lucide-react"
import React from "react";
import { useNavigate } from "react-router-dom";
import { DrawerContext } from "../../context-provider/drawer-context-provider";

export default function DestinationTargetDrawer() {
  const usenavigate = useNavigate()
  const { setDrawerKind } = React.useContext(DrawerContext)

  return (
    <div className="w-full my-4 mx-2">
      <div className="w-full flex items-start justify-between space-x-10">

        {/* galery showcase */}
        <div className="w-[50%] space-y-4">
          <div className="w-full aspect-5/3 bg-gray-300 rounded-md" />
          <div className="w-full flex items-center justify-start space-x-2">
            <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" />
            <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" />
            <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" />
            <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" />
            <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" />
            <div className="w-[15%] aspect-5/3 bg-gray-600 rounded-md cursor-pointer" />
          </div>
        </div>

        <div className="w-[50%] aspect-8/6 flex flex-col justify-between px-5">
          <h1 className="text-2xl text-center">Occaecat exercitation mollit sunt ipsum aliquip culpa pariatur.</h1>
          <p className="text-justify">
            Nostrud sunt culpa amet minim velit non eiusmod.
            Duis consequat eu velit ex non commodo ullamco consectetur adipisicing.
            Minim deserunt velit proident ullamco.
            Cupidatat ullamco nisi aute proident.
          </p>
          <div className="space-y-1 pl-5">
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
                usenavigate("/destination/12");
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
