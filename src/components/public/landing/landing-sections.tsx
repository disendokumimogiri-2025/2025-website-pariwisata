import defaultHeroBackground from '@/assets/default-hero-background.jpg'
import type { AboutSectionContentSection, BlogData, CouraselComponent, EducationContentSection, EducationData, GalleryData, HeroSectionContentSection, PaketWisataContentSection, SouvenirContentSection, SouvenirData } from '@/types/data-types';
import { EdukasiPublikasiCard, GalleryCard, PaketWisataCard, SouvenirCard, SouvenirCardView } from './courasel-cards';
import EmblaLoopCarousel from './EmblaLoopCarousel';
import { useNavigate } from 'react-router-dom';
import { getRenderableDriveLink } from '@/helper/drive-helper';

export function HeroSection({ herodata }: { herodata: HeroSectionContentSection }) {
    return (
        <section className="w-full min-h-screen flex items-center justify-center relative">
            <img
                width={10000}
                height={10000}
                src={
                    herodata.heroimageplaceholder ? getRenderableDriveLink(herodata.heroimageplaceholder) :
                        defaultHeroBackground
                }
                alt="background"
                className="absolute inset-0 w-full h-full object-cover -z-50"
            />

            <div className="-z-40 bg-white/15 absolute w-full h-full"></div>

            {/* content */}
            <div className="text-center px-4 max-w-5xl ">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#fbf4e4] font-comfortaa">
                    {herodata.herotitle}
                </h1>
                <h2 className="text-xl md:text-2xl mb-3 text-[#fbf4e4]">
                    {herodata.herosubtitle}
                </h2>
                <p className="text-base md:text-lg text-[#fbf4e4]">
                    {herodata.heroabstract}
                </p>
                <div className="py-5">
                    <a
                        href="#about"
                        className="
                                px-8 py-3
                                bg-white text-black font-medium
                                rounded-md
                                transition-all duration-300 ease-out
                                hover:bg-[#d0a23e]
                                hover:text-white
                                hover:-translate-y-1
                                hover:shadow-lg
                                active:translate-y-0
                                active:shadow-md
                            "
                    >
                        Tentang Lumbung Mataraman
                    </a>
                </div>

            </div>
        </section>
    )
}

export function AboutSection({ aboutdata, galleriesData }: { aboutdata: AboutSectionContentSection, galleriesData: GalleryData[] }) {
    const couraselData: CouraselComponent[] = [
        { id: 0, component: <GalleryCard /> },
        { id: 1, component: <GalleryCard /> },
        { id: 2, component: <GalleryCard /> },
        { id: 3, component: <GalleryCard /> },
        { id: 4, component: <GalleryCard /> },
        { id: 5, component: <GalleryCard /> },
    ];

    const sortedGalleries = [...galleriesData].sort(
        (a, b) => a.order - b.order
    );

    const gridMap: Record<number, string> = {
        1: "col-span-2 row-span-2",
        2: "col-span-2",
        3: "col-span-2 row-span-2",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "col-span-2",
    };

    return (
        <section className="w-full min-h-screen flex items-center justify-center off-white-pallate" id='about'>
            <div className='w-full h-full flex flex-col xl:flex-row p-5 xl:p-10 gap-16 xl:items-center'>
                {/* text content */}
                <div className='space-y-4 xl:order-2 w-full xl:w-[35%]'>
                    <h1 className='text-2xl font-semibold text-[#d0a23e]'>{aboutdata.abouttitle}</h1>
                    <h2 className='text-justify'>
                        {aboutdata.aboutabstract}
                    </h2>
                </div>
                {/* galery showup */}
                <div className='w-full aspect-square xl:aspect-5/3 xl:order-1 xl:w-[65%] flex justify-center items-center'>
                    <div className='w-full md:hidden'>
                        <EmblaLoopCarousel listContent={couraselData} />
                    </div>
                    <div className="w-full h-full hidden md:block">
                        <div className="w-full h-full grid grid-cols-4 grid-rows-4 gap-2">
                            {sortedGalleries.map((item) => (
                                <div
                                    key={item._id}
                                    className={`w-full h-full rounded-md overflow-hidden relative ${gridMap[item.order]}`}
                                >
                                    <img
                                        src={getRenderableDriveLink(item.galleryimage)}
                                        alt={item.gallerytitle}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function WisataKulinerSection({ wisatadata, blogdatas }: { wisatadata: PaketWisataContentSection, blogdatas: BlogData[] }) {
    const couraselData: CouraselComponent[] = blogdatas.map((blog, idx) => (
        { id: idx, component: <PaketWisataCard imagePlaceHolder={blog.imageplaceholder} price={blog.price} title={blog.name} /> }
    ))

    const usenavigate = useNavigate();

    return (
        <section className="w-full min-h-screen flex items-center justify-center dark-green-pallate" id='about'>
            <div className='w-full h-full flex flex-col xl:flex-row p-5 md:p-10 gap-16 xl:items-center'>
                {/* text content */}
                <div className='w-full xl:w-[35%] space-y-10'>
                    <h2 className='text-justify text-white'>
                        {wisatadata.paketwisataabstract}
                    </h2>
                    <button
                        onClick={() => usenavigate('/marketplace')}
                        className='
                                px-8 py-3
                                bg-white text-black font-medium
                                rounded-md
                                transition-all duration-300 ease-out
                                hover:bg-[#d0a23e]
                                hover:text-white
                                hover:-translate-y-1
                                hover:shadow-lg
                                active:translate-y-0
                                active:shadow-md
                                '
                    >
                        Lihat Semua Paket Wisata
                    </button>
                </div>
                {/* galery showup */}
                <div className='w-full aspect-square xl:aspect-5/3 xl:w-[65%] flex justify-center items-center'>
                    <div className='w-full'>
                        <EmblaLoopCarousel listContent={couraselData} />
                    </div>
                    {/* sm scroll embela */}
                    {/* md gallery */}
                    {/* xl gallery */}
                </div>
            </div>
        </section>
    )
}

export function EducationSection({ edudata, edudatas }: { edudata: EducationContentSection, edudatas: EducationData[] }) {
    const couraselData: CouraselComponent[] = edudatas.map((edu, idx) => (
        { id: idx, component: <EdukasiPublikasiCard imagePlaceHolder={edu.imageplaceholder} title={edu.name} /> }
    ))

    const usenavigate = useNavigate();

    return (
        <section className="w-full min-h-screen flex flex-col gap-10 items-center justify-center dark-green-pallate p-10">
            <div className='w-full flex flex-col justify-center items-center gap-5'>
                <h1 className='text-[#fbf4e4] text-2xl font-semibold font-comfortaa w-fit'>{edudata.educationtitle}</h1>
                <button
                    onClick={() => usenavigate('/edu')}
                    className='
                    w-fit
                    px-8 py-3
                    bg-white text-black font-medium
                    rounded-md
                    transition-all duration-300 ease-out
                    hover:bg-[#d0a23e]
                    hover:text-[#fbf4e4]
                    hover:-translate-y-1
                    hover:shadow-lg
                    active:translate-y-0
                    active:shadow-md
                    '
                >
                    Lihat Konten Edukasi
                </button>
            </div>
            <div className='w-full aspect-square xl:aspect-5/2 flex items-center justify-center'>
                <div className='w-full'>
                    <EmblaLoopCarousel listContent={couraselData} />
                </div>
            </div>
        </section>
    );
}

export function SouvenirSection({ souvenridata, data }: { souvenridata: SouvenirContentSection, data: SouvenirData[] }) {
    const couraselData: CouraselComponent[] = data.slice(0, 3).map((souv, idx) => (
        { id: idx, component: <SouvenirCard imagePlaceHolder={souv.imageplaceholder} price={souv.price} title={souv.name} /> }
    ))

    console.log(data)

    const usenavigate = useNavigate();

    return (
        <section className="w-full min-h-screen flex flex-col gap-10 items-center justify-center off-white-pallate p-10 py-20">
            <div className='w-full flex flex-col justify-center items-center gap-5'>
                <h1 className='text-[#27422d] text-2xl font-semibold font-comfortaa w-fit'>{souvenridata.souvenirtitle}</h1>
            </div>
            <div className='w-full aspect-square xl:aspect-auto flex items-center justify-center'>
                <div className='w-full xl:hidden'>
                    <EmblaLoopCarousel listContent={couraselData} />
                </div>
                <div className='w-full hidden xl:flex'>
                    <div className='w-full grid grid-cols-3 gap-10'>
                        {data.map((d, idx) => (
                            <SouvenirCardView d={d} key={idx} />
                        ))}
                    </div>
                </div>
            </div>
            <button
                onClick={() => usenavigate('/souvenir')}
                className='
                    w-fit
                    px-8 py-3
                    bg-[#27422d] text-white font-medium
                    rounded-md
                    transition-all duration-300 ease-out
                    hover:bg-[#d0a23e]
                    hover:text-[#fbf4e4]
                    hover:-translate-y-1
                    hover:shadow-lg
                    active:translate-y-0
                    active:shadow-md
                    '
            >
                Lihat Semua Souvenir
            </button>
        </section>
    )
}