/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import {
    CulinaryDataInterface,
    DestinationDataInterface,
} from "../constant/data-types";

export enum DestinationLayoutKindEnum {
    gallery = "gallery",
    grid = "grid",
}

export type DestinationDataContextType = {
    selectedlayout: DestinationLayoutKindEnum;
    _selectedId: string | null;
    destinationData: DestinationDataInterface | null;
    culinaryData: CulinaryDataInterface | null;
    setSelectedlayout: (d: DestinationLayoutKindEnum) => void;
    setSelectedId: (d: string | null) => void;
    setDestinationData: (d: DestinationDataInterface | null) => void;
    setCulinaryData: (d: CulinaryDataInterface | null) => void;
};

const STORAGE_KEY_DEST = "destination-data";
const STORAGE_KEY_CUL = "culinary-data";
const STORAGE_KEY_ID = "id-data";

export const DestinationDataContext =
    createContext<DestinationDataContextType>({
        selectedlayout: DestinationLayoutKindEnum.gallery,
        _selectedId: null,
        destinationData: null,
        culinaryData: null,
        setSelectedlayout: () => { },
        setSelectedId: () => { },
        setDestinationData: () => { },
        setCulinaryData: () => { },
    });

export default function DestinationDataProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [selectedId, setSelectedId] = useState<string | null>(JSON.parse(localStorage.getItem(STORAGE_KEY_ID) || "null"));
    const [destinationData, setDestinationData] = useState<DestinationDataInterface | null>(JSON.parse(localStorage.getItem(STORAGE_KEY_DEST) || "null"));
    const [culinaryData, setCulinaryData] = useState<CulinaryDataInterface | null>(JSON.parse(localStorage.getItem(STORAGE_KEY_CUL) || "null"));
    const [selectedLayout, setSelectedLayout] = useState<DestinationLayoutKindEnum>(DestinationLayoutKindEnum.gallery);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY_DEST, JSON.stringify(destinationData));
    }, [selectedId, destinationData, culinaryData, selectedLayout]);

    return (
        <DestinationDataContext.Provider
            value={{
                _selectedId: selectedId,
                setSelectedId,
                destinationData,
                setDestinationData,
                selectedlayout: selectedLayout,
                setSelectedlayout: setSelectedLayout,
                culinaryData,
                setCulinaryData,
            }}
        >
            {children}
        </DestinationDataContext.Provider>
    );
}
