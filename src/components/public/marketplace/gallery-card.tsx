import { getRenderableDriveLink } from "@/helper/drive-helper";
import type { BlogData } from "@/types/data-types";

import defaultImageBackground from "@/assets/default-hero-background.jpg"
import { useNavigate } from "react-router-dom";

export function MainGalleryDestinationCard({ d }: { d: BlogData }) {
    const navigate = useNavigate()

    return (
        <div className='w-[28vw] aspect-3/4 rounded-md hidden xl:block overflow-hidden'>
            <div className="relative group w-full h-full">
                <img
                    src={getRenderableDriveLink(d.imageplaceholder) ?? defaultImageBackground}
                    alt="image subheading"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="
                    absolute inset-0
                    bg-black/60 backdrop-blur-sm
                    flex items-center justify-center
                    opacity-0 translate-y-3
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:translate-y-0
                ">
                    <button
                        onClick={() => navigate(`/blog/${d._id}`)}
                        className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700"
                    >
                        Telusuri Lebih Lanjut
                    </button>
                </div>
            </div>
        </div>
    );
}

export function SecGalleryDestinationCard({ d }: { d: BlogData }) {
    const navigate = useNavigate()

    return (
        <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md overflow-hidden'>
            <div className="relative group w-full h-full">
                <img
                    src={getRenderableDriveLink(d.imageplaceholder) ?? defaultImageBackground}
                    alt="image subheading"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="
                    absolute inset-0
                    bg-black/60 backdrop-blur-sm
                    flex items-center justify-center
                    opacity-0 translate-y-3
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:translate-y-0
                ">
                    <button
                        onClick={() => navigate(`/blog/${d._id}`)}
                        className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700"
                    >
                        Telusuri Lebih Lanjut
                    </button>
                </div>
            </div>
        </div>
    );
}


export function MainCullinaryDestinationCard({ d }: { d: BlogData }) {
    const usenavigate = useNavigate()
    return (
        <div className='w-[28vw] aspect-3/4 rounded-md hidden xl:block overflow-hidden'>
            <div className="relative group w-full h-full">
                <img
                    src={getRenderableDriveLink(d.imageplaceholder) ?? defaultImageBackground}
                    alt="image subheading"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="
                    absolute inset-0
                    bg-black/60 backdrop-blur-sm
                    flex items-center justify-center
                    opacity-0 translate-y-3
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:translate-y-0
                ">
                    <button
                        onClick={() => usenavigate(`/blog/${d._id}`)}
                        className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700"
                    >
                        Telusuri Lebih Lanjut
                    </button>
                </div>
            </div>
        </div>
    );
}

export function SecCullinaryDestinationCard({ d }: { d: BlogData }) {
    const usenavigate = useNavigate()

    return (
        <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md overflow-hidden'>
            <div className="relative group w-full h-full">
                <img
                    src={getRenderableDriveLink(d.imageplaceholder) ?? defaultImageBackground}
                    alt="image subheading"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="
                    absolute inset-0
                    bg-black/60 backdrop-blur-sm
                    flex items-center justify-center
                    opacity-0 translate-y-3
                    transition-all duration-300
                    group-hover:opacity-100
                    group-hover:translate-y-0
                ">
                    <button
                        onClick={() => usenavigate(`/blog/${d._id}`)}
                        className="bg-green-800 text-white px-6 py-2 rounded-md hover:bg-green-700"
                    >
                        Telusuri Lebih Lanjut
                    </button>
                </div>
            </div>
        </div>
    );
}