/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { AdminCreateEditContext, STORAGE_KEY_BLOG, STORAGE_KEY_BLOGCONTENT, STORAGE_KEY_HEADDATA, STORAGE_KEY_METADATA } from "./context-provider-type";
import { type BlogContentData, type BlogData, type BlogHeadData, type BlogMetaData } from "@/types/data-types";
import { Outlet } from "react-router-dom";
import { useFetchAllDataForAdmin } from "@/hooks/connection-hook/admin-connection";

export default function AdminCreateEditProvider() {

    const { blogData, eduData, pageData, souvenirData, galleyData, refetch } = useFetchAllDataForAdmin();

    // temporary data for create new blog
    const [data, setData] = useState<BlogData | null>(JSON.parse(localStorage.getItem(STORAGE_KEY_BLOG) || "null"));
    const [metadata, setMetadata] = useState<BlogMetaData | null>(JSON.parse(localStorage.getItem(STORAGE_KEY_METADATA) || "null"));
    const [headdata, setHeaddata] = useState<BlogHeadData | null>(JSON.parse(localStorage.getItem(STORAGE_KEY_HEADDATA) || "null"));
    const [blogdata, setBlogdata] = useState<BlogContentData[] | null>(JSON.parse(localStorage.getItem(STORAGE_KEY_BLOGCONTENT) || "null"));

    const [jwtToken, setJwtToken] = useState<string | null>(localStorage.getItem(STORAGE_KEY_BLOGCONTENT) || "null");

    const [flag, setFlag] = useState(false);

    useEffect(() => {
        if (data !== null)
            localStorage.setItem(STORAGE_KEY_BLOG, JSON.stringify(data));

        if (metadata !== null)
            localStorage.setItem(STORAGE_KEY_METADATA, JSON.stringify(metadata));

        if (headdata !== null)
            localStorage.setItem(STORAGE_KEY_HEADDATA, JSON.stringify(headdata));

        if (blogdata !== null)
            localStorage.setItem(STORAGE_KEY_BLOGCONTENT, JSON.stringify(blogdata));

        if (jwtToken !== null)
            localStorage.setItem(STORAGE_KEY_BLOGCONTENT, JSON.stringify(jwtToken));
    }, [data, metadata, headdata, blogdata, jwtToken]);

    useEffect(() => {
        refetch();
    }, [flag, setFlag])


    const resetData = () => {
        localStorage.removeItem(STORAGE_KEY_BLOG)
        localStorage.removeItem(STORAGE_KEY_METADATA)
        localStorage.removeItem(STORAGE_KEY_BLOGCONTENT)
        localStorage.removeItem(STORAGE_KEY_HEADDATA)
    }

    return (
        <AdminCreateEditContext.Provider value={{
            data: data,
            metadata: metadata,
            headdata: headdata,
            blogcontent: blogdata,
            setData: setData,
            setMetadata: setMetadata,
            setHeaddata: setHeaddata,
            setBlogcontent: setBlogdata,
            resetAlldata: resetData,

            // api data
            blogapidatas: blogData,
            eduapidataa: eduData,
            pageapidata: pageData,
            souvenirapidata: souvenirData,
            galleyapidata: galleyData,
            flag: flag,
            setFlag: setFlag,

            jwtToken: jwtToken,
            setJwtToken: setJwtToken,
        }}>
            <Outlet />
        </AdminCreateEditContext.Provider>
    );
}