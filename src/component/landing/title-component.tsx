import { TentTree } from "lucide-react";

export default function TitleComponent() {
    return (
        <div
            className="
                bg-white p-3 rounded-md flex items-center justify-center space-x-3
                shadow-xl cursor-pointer
                transition-all duration-300 delay-75
                hover:shadow-2xl hover:-translate-y-0.5
                text-sm 
            "
        >
            <TentTree className="transition-transform duration-300 delay-75 hover:scale-110" />
            <h1 className="transition-colors duration-300 delay-75">
                Lumbung Mataraman
            </h1>
        </div>
    );
}
