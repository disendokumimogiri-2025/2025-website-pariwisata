import { Microscope } from "lucide-react";

export default function EducationSection() {
    return (
        <div className="flex w-full items-start justify-end lg:justify-center mb-10">
            <div className="xl:w-[70vw] lg:w-[80vw] md:w-full w-full p-5">
                <div
                    className="flex w-full h-full justify-start items-center"
                >
                    <div className="flex flex-col items-start">
                        <div className="p-2 bg-white w-fit border border-gray-300 rounded-md flex items-center space-x-2 text-sm mb-5">
                            <Microscope className="w-5 h-5" />
                            <p>Edukasi dan Penelitian</p>
                        </div>

                        <h1 className="md:text-2xl text-xl font-semibold text-white md:mb-10 mb-5">
                            Kawasan integrasi penelitian peternakan dan wisata <br /> 
                            sebagai kemandirian pangan lokal.
                        </h1>

                        <div className="md:text-[18px] text-[12px] text-white">
                            <p>Riset Bibit Unggul ketala dan singkong sebagai varietas unik.</p>
                            <p>Ekosistem Zero Waste, pada pengelolaan kotoran ternak menjadi pupul.</p>
                            <p>Belajar cara menanam ketela, mencabut hasil penenaman dan pengolahan ketela.</p>
                        </div>

                        <div className="lg:w-[80%] w-full bg-white lg:h-[25vw] h-[100vw] my-10 rounded-md flex justify-center items-center">Konten</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
