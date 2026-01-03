import React from "react";
import {
    DrawerContext,
    DrawerKindEnum,
} from "../../context-provider/drawer-context-provider";
import { MoveUpRight } from "lucide-react";

interface DestinationCardInterface {
    name: string;
    desc: string;
    price: string;
    status: string;
    timestamps?: string;
}

export default function DestinationCard({
    name,
    desc,
    price,
    status,
    timestamps,
}: DestinationCardInterface) {
    const { setDrawerKind } = React.useContext(DrawerContext);

    return (
        <div
            className="
                bg-white border border-gray-300 rounded-md
                w-[85vw] h-[100vw]
                md:w-[30vw] md:h-[40vw]
                xl:w-[22vw] xl:h-[30vw]
                hover:shadow-md
                overflow-hidden
            "
        >
            <div className="relative group w-full h-[55%]">
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

            <div className="p-2 space-y-2">
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
                    onClick={() => setDrawerKind(DrawerKindEnum.destination)}
                >
                    <button>Telusuri</button>
                    <MoveUpRight className="h-5 w-5 transition-transform hover:rotate-45" />
                </div>
            </div>
        </div>
    );
}
