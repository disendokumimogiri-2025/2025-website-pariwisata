import defaultHeroBackground from '@/assets/default-hero-background.jpg'
import { getRenderableDriveLink } from '@/helper/drive-helper';
import { ReduceChar } from '@/helper/word-reducer';
import type { BlogData } from '@/types/data-types';
import { useNavigate } from 'react-router-dom';

export default function GridCard({ d }: { d: BlogData }) {
    const usenavigate = useNavigate()

    return (
        <div className="w-full bg-white rounded-md border border-gray-300 hover:shadow-md">
            <div className="group w-full aspect-8/9 relative overflow-hidden rounded-lg shadow-md">
                {/* Background Image */}
                <img
                    src={getRenderableDriveLink(d.imageplaceholder) ?? defaultHeroBackground}
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />

                {/* Hover Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                        onClick={() => usenavigate(`/blog/${d._id}`)}
                        className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-md shadow hover:bg-gray-200"
                    >
                        Telusuri Lebih Lanjut
                    </button>
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 w-full h-full flex flex-col justify-between items-end p-3 text-white">
                    <h1 className="text-sm font-semibold">{ReduceChar(d.name)}</h1>
                    <p className="text-sm font-medium">Rp. {d.price}</p>
                </div>
            </div>
        </div>
    );
}
