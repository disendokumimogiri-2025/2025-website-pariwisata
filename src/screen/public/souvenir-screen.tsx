import MainLayout from "@/components/main-layout";
import { SouvenirCardView } from "@/components/public/landing/courasel-cards";
import { useFetchMarketPlaceData } from "@/hooks/connection-hook/public-connection";
import type { SouvenirData } from "@/types/data-types";
import React from "react";

export default function SouvenirScreen() {
    const { loading, error, data } = useFetchMarketPlaceData();
    const [tempData, setTempData] = React.useState<SouvenirData[]>(data?.souvenirs ?? []);

    const [query, setQuery] = React.useState("");
    const [foundData, setFoundData] = React.useState<SouvenirData[] | null>(null);

    React.useEffect(() => {
        setTempData(data?.souvenirs ?? [])
    }, [data]);

    React.useEffect(() => {
        const filtered = tempData.filter((d) =>
            d.name.toLowerCase().includes(query.toLowerCase())
        );
        setFoundData(filtered);
    }, [query, tempData]);

    if (loading) return <div>{error}</div>

    console.log(foundData, tempData)

    return (
        <MainLayout>
            <div className="pt-[35vw] sm:pt-[24vw] md:pt-[12vw] lg:pt-[8vw] pb-20 min-h-screen">
                <h1 className="text-2xl font-comfortaa text-center px-10">
                    Souvenir Lumbung Mataraman Sriharjo
                </h1>
                <div className="w-full flex justify-end p-10">
                    <div className="flex flex-col w-[80%] xl:w-[20%]">
                        <label htmlFor="query" className="text-gray-600 font-semibold hidden xl:flex">Cari Souvenir</label>
                        <input
                            type="text" name="query" id="query"
                            className="p-2 rounded-md border border-gray-300"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search Here"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
                    {(foundData ?? tempData).map((item) => (
                        <SouvenirCardView key={item._id} d={item} />
                    ))}

                </div>
            </div>
        </MainLayout>
    );
}
