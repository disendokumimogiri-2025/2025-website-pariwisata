/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { type DestinationDataInterface } from '../constant/data-types'

export enum DestinationLayoutKindEnum {
    gallery = "gallery",
    grid = "grid",
}

export type DestinationDataContextType = {
    selectedlayout: DestinationLayoutKindEnum;
    _selectedId: string | null;
    destinationData: DestinationDataInterface | null;
    setSelectedlayout: (d: DestinationLayoutKindEnum) => void;
    setSelectedId: (d: string | null) => void;
    setDestinationData: (d: DestinationDataInterface | null) => void;
}

export const DestinationDataContext = createContext<DestinationDataContextType>({
    selectedlayout: DestinationLayoutKindEnum.gallery,
    _selectedId: null,
    destinationData: null,
    setSelectedlayout: () => { },
    setSelectedId: () => { },
    setDestinationData: () => { }
})

export default function DestinationDataProvider({ children }: { children: React.ReactNode }) {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [destinationData, setDestinationData] = useState<DestinationDataInterface | null>(null);
    const [selectedLayout, setSelectedLayout] = useState<DestinationLayoutKindEnum>(DestinationLayoutKindEnum.gallery);

    return (
        <DestinationDataContext.Provider value={{
            _selectedId: selectedId,
            setSelectedId: setSelectedId,
            destinationData: destinationData,
            setDestinationData: setDestinationData,
            selectedlayout: selectedLayout,
            setSelectedlayout: setSelectedLayout,
        }}
        >
            {children}
        </DestinationDataContext.Provider>
    )
}