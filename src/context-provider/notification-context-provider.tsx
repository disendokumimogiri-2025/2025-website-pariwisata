/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useRef, useState } from "react";

export enum NotificationKindEnum {
    success = "success",
    failed = "failed",
    pending = "pending",
    default = "default",
}

export type NotificationCallType = {
    notifiKind: NotificationKindEnum | null;
    title?: string;
    message?: string;
    durrationms?: number;
    custaction?: {
        component?: React.ReactNode;
        slash?: string;
    };
};

export type NotificationContextType = {
    callNotif: (d: NotificationCallType) => void;
    closeNotif: () => void;
    current?: NotificationCallType | null;
};

export const NotificationContext = createContext<NotificationContextType>({
    callNotif: () => { },
    closeNotif: () => { },
    current: null,
});

export default function NotificationProvider({ children }: { children: React.ReactNode }) {
    const [current, setCurrent] = useState<NotificationCallType | null>(null);
    const timerRef = useRef<number | null>(null);

    const clearTimer = () => {
        if (timerRef.current) {
            window.clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    };

    const closeNotif = () => {
        clearTimer();
        setCurrent(prev => {
            if (!prev) return null;
            return null;
        });
    };

    const callNotif = (d: NotificationCallType) => {
        clearTimer();
        const duration = d.durrationms ?? 4000;
        setCurrent(d);

        timerRef.current = window.setTimeout(() => {
            setCurrent(null);
            timerRef.current = null;
        }, duration);
    };

    useEffect(() => {
        return () => {
            clearTimer();
        };
    }, []);

    return (
        <NotificationContext.Provider value={{ callNotif, closeNotif, current }}>
            {children}
        </NotificationContext.Provider>
    );
}
