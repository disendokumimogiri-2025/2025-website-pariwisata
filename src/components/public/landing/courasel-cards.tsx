import defaultHeroBackground from '@/assets/default-hero-background.jpg'
import { getRenderableDriveLink } from '@/helper/drive-helper';
import { ReduceChar } from '@/helper/word-reducer';
import type { SouvenirData } from '@/types/data-types';

export function GalleryCard() {
    return (
        <div className="w-full aspect-3/4 relative">
            <img
                src={defaultHeroBackground}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover -z-50"
            />
        </div>
    );
}

export function PaketWisataCard({ imagePlaceHolder, title, price }: { imagePlaceHolder: string | null, title: string, price: number }) {
    return (
        <div className="w-full aspect-4/5 xl:aspect-5/4 relative">
            <img
                src={imagePlaceHolder ? getRenderableDriveLink(imagePlaceHolder) : defaultHeroBackground}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover -z-50"
            />
            <div className='w-full h-full flex flex-row justify-between items-end p-2'>
                <h1 className='text-sm'>{ReduceChar(title)}</h1>
                <p className='text-sm'>Rp. {price}</p>
            </div>
        </div>
    );
}

export function EdukasiPublikasiCard({ imagePlaceHolder, title }: { imagePlaceHolder: string | null, title: string }) {
    console.log(getRenderableDriveLink(imagePlaceHolder))
    return (
        <div className="w-full aspect-3/4 xl:aspect-3/2 relative">
            <img
                src={imagePlaceHolder ? getRenderableDriveLink(imagePlaceHolder) : defaultHeroBackground}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover -z-50"
            />
            <div className='w-full h-full flex flex-row justify-between items-end p-2'>
                <h1 className='text-sm'>{ReduceChar(title)}</h1>
            </div>
        </div>
    );
}

export function SouvenirCard({ imagePlaceHolder, title, price }: { imagePlaceHolder: string | null, title: string, price: number }) {
    return (
        <div className="w-full aspect-3/4 xl:aspect-3/2 relative">
            <img
                src={imagePlaceHolder ? getRenderableDriveLink(imagePlaceHolder) : defaultHeroBackground}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover -z-50"
            />
            <div className='w-full h-full flex flex-row justify-between items-end p-2'>
                <h1 className='text-sm'>{ReduceChar(title)}</h1>
                <p className='text-sm'>Rp. {price}</p>
            </div>
        </div>
    );
}

export function SouvenirCardView({d} : {d: SouvenirData}) {
    return (
        <div className="group w-full aspect-4/3 relative overflow-hidden rounded-lg shadow-md">
            {/* Background Image */}
            <img
                src={d.imageplaceholder ? getRenderableDriveLink(d.imageplaceholder) : defaultHeroBackground}
                alt="background"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

            {/* Hover Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-md shadow hover:bg-gray-200">
                    Hubungi
                </button>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 w-full flex flex-row justify-between items-end p-3 text-white">
                <h1 className="text-sm font-semibold">{ReduceChar(d.contenttitle)}</h1>
                <p className="text-sm font-medium">Rp. {d.price}</p>
            </div>
        </div>
    )
}

export function SouvenirCardViewSeeMore() {
    return (
        <div className="group w-full aspect-4/3 relative overflow-hidden rounded-lg shadow-md">
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 bg-gray-300"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

            {/* Hover Button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-md shadow hover:bg-gray-200">
                    Lihat Lebih Banyak Lagi
                </button>
            </div>
        </div>
    )
}