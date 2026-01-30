import type { BlogData } from "@/types/data-types";
import GridCard from "./grid-card";

export default function GridView({ data }: { data: BlogData[] | undefined }) {
    return (
        <div className="w-full flex justify-center items-center px-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {data?.map((d, idx) => (
                    <GridCard key={idx} d={d} />
                ))}
            </div>
        </div>
    );
}
