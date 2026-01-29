import { createContext } from "react";

import type {
  BlogContentData,
  BlogData,
  BlogHeadData,
  BlogMetaData,
  EducationData,
  GalleryData,
  InternalWebsitePageData,
  SouvenirData,
} from "@/types/data-types";

export const STORAGE_KEY_BLOG = "creating-blog-data";
export const STORAGE_KEY_METADATA = "creating-metadata-data";
export const STORAGE_KEY_HEADDATA = "creating-head-data";
export const STORAGE_KEY_BLOGCONTENT = "creating-blogcontent-data";

export const STORAGE_KEY_AUTHTOKEN = "auth-token-data";

export type AdminCreateEditContextType = {
  data: BlogData | null;
  metadata: BlogMetaData | null;
  headdata: BlogHeadData | null;
  blogcontent: BlogContentData[] | null;

  setData: (d: BlogData | null) => void;
  setMetadata: (d: BlogMetaData | null) => void;
  setHeaddata: (d: BlogHeadData | null) => void;
  setBlogcontent: (d: BlogContentData[] | null) => void;
  resetAlldata: () => void;

  // api data
  blogapidatas: BlogData[] | null;
  // setBlogapidatas: (d: BlogData[] | null) => void;

  eduapidataa: EducationData[] | null;
  // setEduapidataa: (d: EducationData[] | null) => void;

  pageapidata: InternalWebsitePageData | null;
  // setPageapidata: (d: InternalWebsitePageData | null) => void;

  souvenirapidata: SouvenirData[] | null;
  // setSouvenirapidata: (d: SouvenirData | null) => void;

  galleyapidata: GalleryData[] | null;
  // setGalleyapidata: (d: GalleryData | null) => void;

  flag: boolean;
  setFlag: (d: boolean) => void;

  // auth data HEHEHE
  jwtToken: string | null;
  setJwtToken: (d: string | null) => void;
};

export const AdminCreateEditContext = createContext<AdminCreateEditContextType>(
  {
    data: null,
    metadata: null,
    headdata: null,
    blogcontent: null,
    setData: () => {},
    setMetadata: () => {},
    setHeaddata: () => {},
    setBlogcontent: () => {},
    resetAlldata: () => {},

    blogapidatas: null,
    eduapidataa: null,
    pageapidata: null,
    souvenirapidata: null,
    galleyapidata: null,
    flag: false,
    setFlag: () => {},
    // setBlogapidatas: () => {},
    // setEduapidataa: () => {},
    // setPageapidata: () => {},

    // auth data HEHEHE
    jwtToken: null,
    setJwtToken: () => {},
  },
);
