import GridCard from "./grid-card";

export default function GridView() {
    return (
        <div className="w-full flex justify-center items-center px-10">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                <GridCard />
                <GridCard />
                <GridCard />
                <GridCard />
                <GridCard />
                <GridCard />
                <GridCard />
            </div>
        </div>
    );
}
