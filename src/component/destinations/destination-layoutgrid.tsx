import type { DestinationDataInterface } from "../../constant/data-types";
import DestinationCard from "./destination-card";

export default function DestinationLayoutgrid({ data }: { data: DestinationDataInterface[] | undefined }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-5">
            {data?.map((d, idx) => (
                <DestinationCard
                    key={idx}
                    _id={idx.toString()}
                    name={d.name}
                    desc={d.desc}
                    price={d.price}
                    status={d.status}
                    createdAt={d.createdAt}
                    blogabstract={d.blogabstract}
                    blogimage={d.blogimage}
                    blogtitle={d.blogtitle}
                    updatedAt={d.updatedAt}
                    attributes={d.attributes}
                    terms={d.terms}
                    routes={d.routes}
                />
            ))}
        </div>
    );
}
