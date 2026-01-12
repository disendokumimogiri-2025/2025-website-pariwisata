import { useNavigate } from "react-router-dom";

export function MainGalleryDestinationCard() {
    const usenavigate = useNavigate();

    return (
        <div className='w-[28vw] aspect-3/4 bg-gray-300 rounded-md hidden xl:block'>
            <div className="relative group w-full h-full">
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
                    onClick={() => usenavigate('/destination/1')}
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
    const usenavigate = useNavigate();

    return (
        <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md overflow-hidden'>

            <div className="relative group w-full h-full">
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
                    onClick={() => usenavigate('/destination/1')}
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
    const usenavigate = useNavigate();

    return (
        <div className='w-[28vw] aspect-3/4 bg-gray-300 rounded-md hidden xl:block overflow-hidden'>
            <div className="relative group w-full h-full">
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
                    onClick={() => usenavigate('/destination/1')}
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
    const usenavigate = useNavigate();

    return (
        <div className='w-[85%] md:w-[45%] shrink-0 aspect-6/5 border border-gray-400 rounded-md overflow-hidden'>
            <div className="relative group w-full h-full">
                <div className='w-full aspect-6/5 bg-gray-300' />
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
                    onClick={() => usenavigate('/destination/1')}
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