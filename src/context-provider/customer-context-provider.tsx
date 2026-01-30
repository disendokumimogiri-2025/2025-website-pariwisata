import { useEffect, useState } from "react";
import {
    CustomerContext,
    STORAGE_KEY_BOOKIDS,
    STORAGE_KEY_BOOKITEM,
    type BookInterface
} from "./context-provider-type";
import { Outlet } from "react-router-dom";

export default function CustProvider() {
    const [name, setName] = useState<string | null>(null);
    const [messages, setMessages] = useState<string | null>(null);

    const [bookIds, setBookIds] = useState<string[] | null>(() => {
        const raw = localStorage.getItem(STORAGE_KEY_BOOKIDS);
        return raw ? JSON.parse(raw) : null;
    });

    const [bookItem, setBookItem] = useState<BookInterface[] | null>(() => {
        const raw = localStorage.getItem(STORAGE_KEY_BOOKITEM);
        return raw ? JSON.parse(raw) : null;
    });

    useEffect(() => {
        if (bookIds) {
            localStorage.setItem(STORAGE_KEY_BOOKIDS, JSON.stringify(bookIds));
        } else {
            localStorage.removeItem(STORAGE_KEY_BOOKIDS);
        }
    }, [bookIds]);

    useEffect(() => {
        if (bookItem) {
            localStorage.setItem(STORAGE_KEY_BOOKITEM, JSON.stringify(bookItem));
        } else {
            localStorage.removeItem(STORAGE_KEY_BOOKITEM);
        }
    }, [bookItem]);

    return (
        <CustomerContext.Provider
            value={{
                name,
                messages,
                bookIds,
                bookItem,
                setName,
                setMessages,
                setBookIds,
                setBookItem,
            }}
        >
            <Outlet />
        </CustomerContext.Provider>
    );
}
