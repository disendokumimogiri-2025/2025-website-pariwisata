/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */

import { useEffect, useState } from "react";
import {
    AdminCreateEditContext,
    STORAGE_KEY_AUTHTOKEN,
    STORAGE_KEY_BLOG,
    STORAGE_KEY_BLOGCONTENT,
    STORAGE_KEY_HEADDATA,
    STORAGE_KEY_METADATA
} from "./context-provider-type";
import {
    type BlogContentData,
    type BlogData,
    type BlogHeadData,
    type BlogMetaData
} from "@/types/data-types";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useFetchAllDataForAdmin } from "@/hooks/connection-hook/admin-connection";

export default function AdminCreateEditProvider() {
    const navigate = useNavigate();
    const location = useLocation();

    const { blogData, eduData, pageData, souvenirData, galleyData, refetch } =
        useFetchAllDataForAdmin();

    const [data, setData] = useState<BlogData | null>(() =>
        JSON.parse(localStorage.getItem(STORAGE_KEY_BLOG) ?? "null")
    );

    const [metadata, setMetadata] = useState<BlogMetaData | null>(() =>
        JSON.parse(localStorage.getItem(STORAGE_KEY_METADATA) ?? "null")
    );

    const [headdata, setHeaddata] = useState<BlogHeadData | null>(() =>
        JSON.parse(localStorage.getItem(STORAGE_KEY_HEADDATA) ?? "null")
    );

    const [blogdata, setBlogdata] = useState<BlogContentData[] | null>(() =>
        JSON.parse(localStorage.getItem(STORAGE_KEY_BLOGCONTENT) ?? "null")
    );

    const [jwtToken, setJwtToken] = useState<string | null>(() =>
        localStorage.getItem(STORAGE_KEY_AUTHTOKEN)
    );

    const [flag, setFlag] = useState(false);


    useEffect(() => {
        data
            ? localStorage.setItem(STORAGE_KEY_BLOG, JSON.stringify(data))
            : localStorage.removeItem(STORAGE_KEY_BLOG);
    }, [data]);

    useEffect(() => {
        metadata
            ? localStorage.setItem(STORAGE_KEY_METADATA, JSON.stringify(metadata))
            : localStorage.removeItem(STORAGE_KEY_METADATA);
    }, [metadata]);

    useEffect(() => {
        headdata
            ? localStorage.setItem(STORAGE_KEY_HEADDATA, JSON.stringify(headdata))
            : localStorage.removeItem(STORAGE_KEY_HEADDATA);
    }, [headdata]);

    useEffect(() => {
        blogdata
            ? localStorage.setItem(STORAGE_KEY_BLOGCONTENT, JSON.stringify(blogdata))
            : localStorage.removeItem(STORAGE_KEY_BLOGCONTENT);
    }, [blogdata]);

    useEffect(() => {
        jwtToken
            ? localStorage.setItem(STORAGE_KEY_AUTHTOKEN, jwtToken)
            : localStorage.removeItem(STORAGE_KEY_AUTHTOKEN);
    }, [jwtToken]);


    useEffect(() => {
        if (!jwtToken && location.pathname !== "/admin/login") {
            navigate("/admin/login", { replace: true });
        }
    }, [jwtToken, location.pathname, navigate]);


    useEffect(() => {
        refetch();
    }, [flag]);


    const resetData = () => {
        localStorage.removeItem(STORAGE_KEY_BLOG);
        localStorage.removeItem(STORAGE_KEY_METADATA);
        localStorage.removeItem(STORAGE_KEY_BLOGCONTENT);
        localStorage.removeItem(STORAGE_KEY_HEADDATA);
    };

    return (
        <AdminCreateEditContext.Provider
            value={{
                data,
                metadata,
                headdata,
                blogcontent: blogdata,
                setData,
                setMetadata,
                setHeaddata,
                setBlogcontent: setBlogdata,
                resetAlldata: resetData,

                blogapidatas: blogData,
                eduapidataa: eduData,
                pageapidata: pageData,
                souvenirapidata: souvenirData,
                galleyapidata: galleyData,

                flag,
                setFlag,

                jwtToken,
                setJwtToken
            }}
        >
            <Outlet />
        </AdminCreateEditContext.Provider>
    );
}
