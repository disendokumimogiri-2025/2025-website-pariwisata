export function MainGalleryDestinationCard() {

    return (
        <div className='w-[28vw] aspect-3/4 bg-gray-300 rounded-md hidden xl:block'>
            <div className="relative group w-full h-full overflow-hidden">
                <img src={`https://drive.google.com/thumbnail?id=${12}`} alt="image subheading" className="w-full content-center object-cover" />
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
                    >
                        Telusuri Lebih Lanjut
                    </button>
                </div>
            </div>
        </div>
    );
}

export function SecGalleryDestinationCard() {
    return (
        <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md overflow-hidden'>

            <div className="relative group w-full h-full">
                <div className="bg-gray-300 w-full h-full overflow-hidden">
                    <img src={`https://drive.google.com/thumbnail?id=${12}`} alt="image subheading" className="w-full content-center object-cover" />
                </div>
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
                    >
                        Telusuri Lebih Lanjut
                    </button>
                </div>
            </div>
            <div className='w-full aspect-6/5 bg-gray-300' />

        </div>
    );
}

export function MainCullinaryDestinationCard() {
    return (
        <div className='w-[28vw] aspect-3/4 bg-gray-300 rounded-md hidden xl:block overflow-hidden'>
            <div className="relative group w-full h-full overflow-hidden">
                <img src={`https://drive.google.com/thumbnail?id=${12}`} alt="image subheading" className="w-full content-center object-cover" />
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
                    >
                        Telusuri Lebih Lanjut
                    </button>
                </div>
            </div>
        </div>
    );
}

export function SecCullinaryDestinationCard() {

    return (
        <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md overflow-hidden'>
            <div className="relative group w-full h-full">
                <div className='w-full aspect-6/5 bg-gray-300 overflow-hidden'>
                    <img src={`https://drive.google.com/thumbnail?id=${12}`} alt="image subheading" className="w-full content-center object-cover" />
                </div>
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
                    >
                        Telusuri Lebih Lanjut
                    </button>
                </div>
            </div>
        </div>
    );
}