import React from "react";
import {
    DrawerContext,
    DrawerKindEnum,
} from "../../context-provider/drawer-context-provider";
import { MoveUpRight } from "lucide-react";
import type { DestinationDataInterface } from "../../constant/data-types";
import { DestinationDataContext } from "../../context-provider/destinationdata-context-provider";

export default function DestinationCard({
    _id,
    name,
    desc,
    price,
    status,
    timestamps,
    imageplaceholder,
    attributes,
    routes
}: DestinationDataInterface) {
    const { setDrawerKind } = React.useContext(DrawerContext);
    const { setSelectedId, setDestinationData } = React.useContext(DestinationDataContext);

    return (
        <div
            className="
                bg-white border border-gray-300 rounded-md
                w-[85vw] h-fit
                md:w-[30vw] md:h-[48vw]
                lg:w-[30vw] lg:h-[35vw]
                xl:w-[22vw] xl:h-[32vw]
                hover:shadow-md
                overflow-hidden
            "
        >
            <div className="relative group w-full h-[60vw] md:h-[50%] xl:h-[55%]">
                {/* IMAGE PLACEHOLDER */}
                <div className="bg-gray-300 w-full h-full" />

                <div
                    className="
                        absolute inset-0
                        bg-black/60 backdrop-blur-sm
                        flex items-center justify-center
                        opacity-0 translate-y-3
                        transition-all duration-300 ease-out
                        group-hover:opacity-100
                        group-hover:translate-y-0
                    "
                >
                    <button
                        className="
                            bg-green-800 text-white
                            px-6 py-2 rounded-md
                            font-medium
                            hover:bg-green-700
                            transition
                        "
                        onClick={() => console.log(desc, timestamps)}
                    >
                        Pesan Sekarang
                    </button>
                </div>
            </div>

            <div className="p-2 flex flex-col justify-between xl:space-y-2 lg:space-y-3 space-y-5">
                <h1 className="xl:text-[18px] md:text-[12px] text-xl text-center text-gray-700 font-medium">
                    {name}
                </h1>

                <div className="w-full space-y-2 px-1">
                    <div className="w-full flex items-center justify-between">
                        <p>Harga</p>
                        <p>{price}</p>
                    </div>
                    <div className="w-full flex items-center justify-between">
                        <p>Status</p>
                        <p>{status}</p>
                    </div>
                </div>

                <div
                    className="
                        flex w-full justify-between items-center
                        bg-green-800 text-white 
                        rounded-md
                        space-x-2 py-2 px-5 
                        cursor-pointer hover:bg-green-600
                    "
                    onClick={() => {
                        setSelectedId(_id);
                        setDestinationData({
                            _id: _id,
                            name: name,
                            desc: desc,
                            price: price,
                            imageplaceholder: imageplaceholder,
                            status: status,
                            attributes: attributes,
                            routes: routes,
                        })
                        setDrawerKind(DrawerKindEnum.destination);
                    }}
                >
                    <button>Telusuri</button>
                    <MoveUpRight className="h-5 w-5 transition-transform hover:rotate-45" />
                </div>
            </div>
        </div>
    );
}
