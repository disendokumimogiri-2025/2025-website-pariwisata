import type { BlogData } from "@/types/data-types";
import {
    MainCullinaryDestinationCard,
    MainGalleryDestinationCard,
    SecCullinaryDestinationCard,
    SecGalleryDestinationCard
} from "./gallery-card";

export default function GalleryView({ data }: { data: BlogData[] | undefined }) {
    const wisata = data?.filter(d => d.isClinary !== 1) ?? [];
    const kuliner = data?.filter(d => d.isClinary !== 0) ?? [];

    const mainWisata = wisata.slice(0, 2);
    const secWisata = wisata.slice(2);

    const mainKuliner = kuliner.slice(0, 2);
    const secKuliner = kuliner.slice(2);

    return (
        <div className='w-full h-full px-10 space-y-12 md:space-y-32'>

            <div className='space-y-5'>
                <h1 className="text-xl">Wisata</h1>
                <div className='flex items-center space-x-5'>
                    {mainWisata.map((d, idx) => (
                        <MainGalleryDestinationCard key={idx} d={d} />
                    ))}

                    <div className='w-full xl:w-[72vw] overflow-x-scroll hide-scrollbar'>
                        <div className='flex flex-nowrap items-center space-x-2'>
                            {secWisata.map((d, idx) => (
                                <SecGalleryDestinationCard key={idx} d={d} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className='space-y-5'>
                <h1 className="text-xl">Kuliner Lumbung Mataraman</h1>
                <div className='flex items-center space-x-5'>
                    {mainKuliner.map((d, idx) => (
                        <MainCullinaryDestinationCard key={idx} d={d} />
                    ))}

                    {/* support cullinery showcase */}
                    <div className='w-full xl:w-[44vw] overflow-x-scroll hide-scrollbar'>
                        <div className='flex flex-nowrap items-center space-x-2'>
                            {secKuliner.map((d, idx) => (
                                <SecCullinaryDestinationCard key={idx} d={d} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
