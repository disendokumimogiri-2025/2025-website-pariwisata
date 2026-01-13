import { CircleDot, MapPinPlusInside, SquareDot, Tags } from "lucide-react";
import MainLayout from "../component/main-layout"
import React from "react";
import { ModalContext, ModalKindEnum } from "../context-provider/modal-context-provider";

export default function DestinationsScreen() {
  const { setModalKind } = React.useContext(ModalContext);
  return (
    <MainLayout>
      <div className="w-full min-h-screen flex flex-col xl:gap-8 gap-5">
        {/* header background */}
        <div className="w-full aspect-video md:aspect-3/1 bg-gray-300 flex justify-center items-center">Background</div>

        <div className="flex md:gap-5 gap-2">

          {/* content */}
          <div className="p-5 w-full">
            <div className="w-full min-h-screen">
              <div className="flex flex-col justify-start gap-5">
                <h1 className="text-5xl md:my-8 my-5">Title</h1>
                <p className="text-justify">
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                  Commodo consectetur elit eiusmod consequat aliquip nisi consequat eiusmod aute do magna duis minim.
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                  Commodo consectetur elit eiusmod consequat aliquip nisi consequat eiusmod aute do magna duis minim.
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                  Commodo consectetur elit eiusmod consequat aliquip nisi consequat eiusmod aute do magna duis minim.
                </p>
                <div className="w-full aspect-video bg-red-500"></div>
                <h2 className="text-3xl md:my-5 my-2">Subtitle</h2>
                <p className="text-justify">
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                  Commodo consectetur elit eiusmod consequat aliquip nisi consequat eiusmod aute do magna duis minim.
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                </p>
                <p className="text-justify">
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                  Commodo consectetur elit eiusmod consequat aliquip nisi consequat eiusmod aute do magna duis minim.
                  Aliquip id laboris Lorem nulla nulla. Cillum ipsum deserunt laborum adipisicing.
                  Voluptate occaecat minim deserunt labore quis.
                </p>
              </div>
            </div>
          </div>

          {/* side content */}
          <div className="hidden xl:flex xl:flex-col xl:gap-10 xl:w-[40vw] xl:p-8 xl:mt-5">
            <div className="w-full h-fit border border-gray-300 p-5 rounded-md flex flex-col gap-4">
              <div className="w-full flex flex-col gap-2">
                <h2>Detail dan Keterangan</h2>
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Tags className="w-5 h-5" />
                    <p className="text-sm">Aliqua dolore incididunt eiusmod cillum deserunt.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tags className="w-5 h-5" />
                    <p className="text-sm">Aliqua dolore incididunt eiusmod cillum deserunt.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Tags className="w-5 h-5" />
                    <p className="text-sm">Aliqua dolore incididunt eiusmod cillum deserunt.</p>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col">
                <h2>Harga</h2>
                <p>Rp. 10.000</p>
              </div>

            </div>

            <div className="w-full h-fit border border-gray-300 p-5 rounded-md flex flex-col gap-4">
              <h2 className="text-center text-xl pb-5">Perjalanan Paket Wisata</h2>
              <div className="w-full grid grid-cols-2">
                <div className="flex justify-center items-center">
                  <MapPinPlusInside className="w-8 h-8" />
                </div>

                <div className="flex justify-center items-center" onClick={() => setModalKind(ModalKindEnum.destinationroute)}
                >
                  content
                </div>
                <div className="flex justify-center items-center h-[5vw]">
                  <div className="h-full w-0.5 border bg-black rounded-md" />
                </div>
                <div className="flex justify-center items-center h-[5vw]">
                  <div className="h-full w-0.5 border bg-black rounded-md" />
                </div>

                <div className="flex justify-center items-center">
                  <MapPinPlusInside className="w-8 h-8" />
                </div>
                <div
                  className="flex justify-center items-center" onClick={() => setModalKind(ModalKindEnum.destinationroute)}
                >
                  content
                </div>
                <div className="flex justify-center items-center h-[5vw]">
                  <div className="h-full w-0.5 border bg-black rounded-md" />
                </div>
                <div className="flex justify-center items-center h-[5vw]">
                  <div className="h-full w-0.5 border bg-black rounded-md" />
                </div>

                <div className="flex justify-center items-center">
                  <MapPinPlusInside className="w-8 h-8" />
                </div>
                <div
                  className="flex justify-center items-center" onClick={() => setModalKind(ModalKindEnum.destinationroute)}
                >
                  content
                </div>
                <div className="flex justify-center items-center h-[5vw]">
                  <div className="h-full w-0.5 border bg-black rounded-md" />
                </div>
                <div className="flex justify-center items-center h-[5vw]">
                  <div className="h-full w-0.5 border bg-black rounded-md" />
                </div>

                <div className="flex justify-center items-center">
                  <MapPinPlusInside className="w-8 h-8" />
                </div>
                <div
                  className="flex justify-center items-center" onClick={() => setModalKind(ModalKindEnum.destinationroute)}
                >
                  content
                </div>
                <div className="flex justify-center items-center h-[5vw]">
                  <div className="h-full w-0.5 border bg-black rounded-md" />
                </div>
                <div className="flex justify-center items-center h-[5vw]">
                  <div className="h-full w-0.5 border bg-black rounded-md" />
                </div>

                <div className="flex justify-center items-center">
                  <SquareDot className="w-8 h-8" />
                </div>
                <div className="flex justify-center items-center">
                  <CircleDot className="w-8 h-8" />
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </MainLayout>
  );
}
