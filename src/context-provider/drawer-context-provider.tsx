/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export enum DrawerKindEnum {
    destination = "destination"
}

export type DrawerContextType = {
    drawerKind: DrawerKindEnum | null;
    setDrawerKind: (d: DrawerKindEnum | null) => void;
}

export const DrawerContext = createContext<DrawerContextType>({
    drawerKind: null,
    setDrawerKind: () => { },
})

export default function DrawerProvider({ children }: { children: React.ReactNode }) {
    const [drawer, setDrawer] = useState<DrawerKindEnum | null>(null);

    return (
        <DrawerContext.Provider value={{
            drawerKind: drawer,
            setDrawerKind: setDrawer
        }}>
            {children}
        </DrawerContext.Provider>
    )
}