import { CircleDot, MapPinPlusInside, SquareDot, Tags } from "lucide-react";
import MainLayout from "../component/main-layout"
import React from "react";
import { ModalContext, ModalKindEnum } from "../context-provider/modal-context-provider";
import { DestinationDataContext } from "../context-provider/destinationdata-context-provider";

export default function DestinationsScreen() {
  const { setModalKind } = React.useContext(ModalContext);
  const { destinationData } = React.useContext(DestinationDataContext);

  console.log(destinationData?.blogimage);

  return (
    <MainLayout>
      <div className="w-full min-h-screen flex flex-col xl:gap-8 gap-5">
        {/* header background */}
        <div className="w-full aspect-video md:aspect-3/1 bg-gray-300 flex justify-center items-center overflow-hidden">
          <img src={`https://drive.google.com/thumbnail?id=${destinationData?.blogimage}`} alt="blog vcver" className="w-full content-center object-cover" />
        </div>

        <div className="flex md:gap-5 gap-2">

          {/* content */}
          <div className="p-5 w-full">  
            <div className="w-full min-h-screen">
              <div className="flex flex-col justify-start gap-5">
                <h1 className="text-5xl md:my-8 my-5">{destinationData?.blogtitle}</h1>
                <p className="text-justify">
                  {destinationData?.blogabstract}
                </p>
                {destinationData?.attributes?.map((attr, attridx) => (
                  <div key={attridx} className="py-5 space-y-3">
                    <div className="w-full aspect-video bg-gray-300 overflow-hidden">
                      <img src={`https://drive.google.com/thumbnail?id=${attr?.image}`} alt="image subheading" className="w-full content-center object-cover" />
                    </div>
                    <div className="space-y-5">
                      <h2 className="text-3xl md:my-5 my-2">{attr.attribute_subtitle}</h2>
                      <p className="text-justify">
                        {attr.attribute_desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* side content */}
          <div className="hidden xl:flex xl:flex-col xl:gap-10 xl:w-[40vw] xl:p-8 xl:mt-5">
            <div className="w-full h-fit border border-gray-300 p-5 rounded-md flex flex-col gap-4">
              <div className="w-full flex flex-col gap-2">
                <h2>Detail dan Keterangan</h2>
                <div className="w-full flex flex-col gap-2">
                  {destinationData?.terms?.map((term, termidx) => (
                    <div className="flex items-center gap-2" key={termidx}>
                      <Tags className="w-5 h-5" />
                      <p className="text-sm">{term.term_desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-col">
                <h2>Harga</h2>
                <p>{destinationData?.price}</p>
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
