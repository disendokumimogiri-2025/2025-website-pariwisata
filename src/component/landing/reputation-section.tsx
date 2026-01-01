import { ThumbsUp } from "lucide-react";

export default function ReputationSection() {
    return (
        <div className="w-full h-screen flex md:justify-center md:item-center">
            <div className="xl:w-[80vw] lg:w-[90vw] md:w-[90vw] w-[90vw] p-5 rounded-md">
                <div
                    className="flex w-full h-full justify-center items-center"
                >
                    <div className="flex flex-col md:flex-row items-center md:space-x-10">

                        <div className="flex flex-col items-start space-y-8">
                            <div className="p-2 bg-white w-fit flex md:items-center items-start rounded-md text-sm space-x-2">
                                <ThumbsUp className="w-5 h-5" />
                                <p className="hidden md:flex">Reputasi Lumbung Mataraman</p>
                                <p className="md:hidden">Reputasi</p>
                            </div>
                            <h1 className="md:text-2xl text-1xl font-semibold text-white md:mb-10 mb-5">
                                Sit qui laboris minim dolor ut duis velit enim <br /> quis anim et quis Lorem.
                            </h1>
                        </div>

                        <div className="w-full md:w-fit flex flex-col items-start">
                            <div className="space-y-5">
                                <div className="border-b border-white py-2">
                                    <h2 className="lg:text-3xl text-2xl text-gray-200 font-bold">205 +</h2>
                                    <p className="lg:text-[20px] text-[15px] text-white">Melayani Lebih dari 205 Agensi</p>
                                </div>
                                <div className="border-b border-white py-2">
                                    <h2 className="lg:text-3xl text-2xl text-gray-200 font-bold">100k +</h2>
                                    <p className="lg:text-[20px] text-[15px] text-white">Incididunt mollit amet mollit sint est irure</p>
                                </div>
                                <div className="border-b border-white py-2">
                                    <h2 className="lg:text-3xl text-2xl text-gray-200 font-bold">302 +</h2>
                                    <p className="lg:text-[20px] text-[15px] text-white">Incididunt mollit amet mollit sint est irure</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
