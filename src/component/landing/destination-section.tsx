import { Milestone } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function DestinationSection() {
    const navigate = useNavigate();

    return (
        <div className="flex w-full items-start justify-end lg:justify-center">
            <div className="xl:w-[70vw] lg:w-[80vw] w-full p-5">
                <div
                    className="flex w-full h-full justify-end items-center"
                >
                    <div className="flex flex-col items-end text-end">
                        <div
                            onClick={() => navigate('/destinations')}
                            className="p-2 bg-white w-fit border border-gray-300 rounded-md flex items-center space-x-2 text-sm mb-5 cursor-pointer"
                        >
                            <Milestone className="w-5 h-5" />
                            <p>Destinasi Wisata</p>
                        </div>

                        <h1 className="md:text-2xl text-xl font-semibold text-white md:mb-10 mb-5">
                            Labotarium Alam sebagai destinasi wisata Agrowisata<br />
                            interaktif dan estetika kearifan lokal
                        </h1>

                        <div className="md:text-[18px] text-[12px] text-white space-y-2">
                            <p>Pengalaman langsung melalui praktik penanaman ketela dan menunggang kuda.</p>
                            <p>Penataan lahan yang rapi sebagai lanskap hijau yang menyegarkan mata.</p>
                            <p>Pemahaman proses pengolahan hasil bumi dan cerita lokal.</p>
                        </div>

                        <div className="lg:w-[80%] w-full bg-white lg:h-[25vw] h-[100vw] my-10 rounded-md flex justify-center items-center">Konten</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
