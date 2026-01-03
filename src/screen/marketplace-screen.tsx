import MainLayout from "../component/main-layout"

import destinationbackgroundxl from "../assets/destinations-background-xl.jpg"
import destinationbackgroundsm from "../assets/destinations-background-sm.png"
import { LayoutGrid, LayoutList, ScanSearch } from "lucide-react";
import { dummydestinationdata } from "../connection/destination-connection";
import DestinationCard from "../component/destinations/destination-card";

export default function MarketplaceScreen() {
    return (
        <MainLayout>
            <div className="relative">
                <img
                    src={destinationbackgroundxl}
                    alt="destination background"
                    className="inset-0 object-cover absolute -z-10 hidden md:flex"
                />
                <img
                    src={destinationbackgroundsm}
                    alt="destination background"
                    className="inset-0 object-cover absolute -z-10 flex md:hidden"
                />
                <div className="w-full h-full py-14 md:py-20 justify-center items-center z-10">
                    <div className="w-full h-full">
                        <h1 className="text-2xl md:text-3xl xl:text-4xl text-center font-semibold text-white z-10">
                            Destinasi dan Paket Wisata <br />
                            Lumbung Mataraman
                        </h1>

                        <div className="w-full flex items-center justify-center md:mt-32 md:mb-40 mt-20 mb-52">
                            <div className="w-full flex items-center justify-center md:space-x-5 px-5">
                                <input
                                    type="text" name="search" id="search"
                                    className="bg-white/40 p-2 rounded-md md:text-xl xl:text-2xl border border-white/90 xl:w-[50%] md:w-[60%] w-screen"
                                    onInput={() => { }}
                                />
                                <ScanSearch className="transition-transform duration-300 delay-75 hover:scale-110 text-white h-10 w-10 cursor-pointer hidden md:flex" />
                            </div>
                        </div>

                        <div className="bg-white min-h-screen w-full flex flex-col justify-center items-center md:justify-start py-8 md:py-10">
                            <div className="w-full px-8 md:px-5 xl:px-10">
                                <div className="flex w-full border border-gray-300 p-3 items-center justify-between rounded-md mb-10">
                                    <p>Exercitation ad </p>
                                    <div className="flex items-center space-x-5">
                                        <LayoutList className="cursor-pointer" />
                                        <LayoutGrid className="cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-5">
                                {dummydestinationdata.map((d, idx) => (
                                    <DestinationCard
                                        key={idx}
                                        name={d.name}
                                        desc={d.desc}
                                        price={d.price}
                                        status={d.status}
                                        timestamps={d.timestamps}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
