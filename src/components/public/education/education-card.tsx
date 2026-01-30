import defaultImageShowcase from "@/assets/default-hero-background.jpg"
import { getRenderableDriveLink } from "@/helper/drive-helper";
import { ReduceChar } from "@/helper/word-reducer";
import type { EducationData } from "@/types/data-types";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

function ShowDetailEducationContent({ d }: { d: EducationData }) {
    return (
        <Dialog>
            <DialogTrigger>Lihat Konten Lengkap</DialogTrigger>

            <DialogContent className="md:min-w-[60vw] min-w-[90vw]">
                <DialogHeader>
                    <DialogTitle className="wrap-break-word">
                        {d.contenttitle}
                    </DialogTitle>
                    <DialogDescription className="text-sm">
                        {d.name}
                    </DialogDescription>
                </DialogHeader>

                <div className="no-scrollbar -mx-4 max-h-[50vh] overflow-y-auto px-4">
                    <div className="space-y-5 flex flex-col justify-center w-full items-center py-7">
                        <img
                            src={d.contentimage ? getRenderableDriveLink(d.contentimage) : defaultImageShowcase}
                            alt="publication overview"
                            className="
                            xl:w-[50%] w-[75%] aspect-video
                            object-cover
                        "
                        />
                        <p>{d.contentdesc}</p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default function EducationCard({ isLeft = false, d }: { isLeft?: boolean, d: EducationData }) {
    return (
        <section
            className="
              flex flex-col-reverse lg:flex-row
              w-full gap-10 items-start
              py-12
              animate-fade-in
            "
        >
            <div className={`w-full lg:w-1/2 space-y-4 ${isLeft ? 'xl:order-1' : 'xl:order-2'}`}>
                <h2 className="text-2xl font-semibold text-gray-900 wrap-break-word">
                    {d.contenttitle}
                </h2>

                <p className="text-gray-600 leading-relaxed text-justify wrap-break-word">
                    {ReduceChar(d.contentdesc, 500)}
                </p>

                <ShowDetailEducationContent d={d} />

            </div>

            <div className={`w-full lg:w-1/2 ${isLeft ? 'xl:order-2' : 'xl:order-1'}`}>
                <div className="
                    relative overflow-hidden rounded-xl
                    shadow-md
                    group
                ">
                    <img
                        src={d.contentimage ? getRenderableDriveLink(d.contentimage) : defaultImageShowcase}
                        alt="publication overview"
                        className="
                            w-full h-80 lg:h-95
                            object-cover
                            transition-transform duration-500 ease-out
                            group-hover:scale-105
                        "
                    />
                </div>
            </div>
        </section>
    );
}
