/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export enum ModalKindEnum {
    authentication = "authentication"
}

export type ModalContextType = {
    modalKind: ModalKindEnum | null;
    setModalKind: (d: ModalKindEnum | null) => void;
}

export const ModalContext = createContext<ModalContextType>({
    modalKind: null,
    setModalKind: () => { },
})

export default function ModalProvider({ children } : { children : React.ReactNode }){
    const [modal, setModal] = useState<ModalKindEnum | null>(null);

    return (
        <ModalContext.Provider value={{
            modalKind: modal,
            setModalKind: setModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}