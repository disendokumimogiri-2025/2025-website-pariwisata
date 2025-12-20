import React from "react";
import { ModalContext, ModalKindEnum } from "../../context-provider/modal-context-provider";

export interface ModalWrapperInterface {
    name: ModalKindEnum;
    component: React.ReactNode;
    outerClose?: boolean;
}

export default function ModalWrapper({ listcontent }: { listcontent: ModalWrapperInterface[] }) {
    const { modalKind, setModalKind } = React.useContext(ModalContext);

    const active = listcontent.find(c => c.name === modalKind);

    const close = React.useCallback(() => {
        if (setModalKind) setModalKind(null);
    }, [setModalKind]);

    React.useEffect(() => {
        if (!modalKind) return;

        function onKey(e: KeyboardEvent) {
            if (e.key === "Escape") {
                if (active?.outerClose ?? true) close();
            }
        }

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [modalKind, active, close]);

    return (
        <div
            className={`
                ${modalKind === null ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                fixed inset-0 bg-black/10 backdrop-blur-sm z-100 flex items-center justify-center transition-opacity duration-300 ease-in-out
            `}
            onClick={() => {
                if (active?.outerClose) close();
            }}
        >
            <div
                className="flex justify-center items-center w-full p-4 transition-all duration-500 ease-in-out"
                onClick={(e) => e.stopPropagation()}
            >
                <div
                    className={`
                        relative bg-white rounded-2xl shadow-xl max-w-xl w-full
                        transform transition-transform duration-300
                        ${modalKind === null ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}
                    `}
                >
                    { active?.component ?? null }
                </div>
            </div>
        </div>
    );
}
