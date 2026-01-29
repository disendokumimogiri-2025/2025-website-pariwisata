/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import { useEffect, useState } from "react";

import {
  type InternalWebsiteContentInterface,
  type GetMarketPlaceDataInterface,
  type InternalWebsitePageData,
  type EducationData,
  type BlogData,
  type SouvenirData,
} from "@/types/data-types";

export const useFetchLandingData = () => {
  const [data, setData] = useState<InternalWebsitePageData | null>(
    null,
  );
  const [edudata, setEdudata] = useState<EducationData[] | null>(
    null,
  );
  const [blogdata, setBlogdata] = useState<BlogData[] | null>(
    null,
  );
  const [souvenirdata, setSouvenirdata] = useState<SouvenirData[] | null>(
    null,
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<InternalWebsiteContentInterface>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/pub/alldata`,
      );

      if (response.status === 200) {
        setData(response.data.page[0]);
        setEdudata(response.data.educations);
        setBlogdata(response.data.blogs);
        setSouvenirdata(response.data.souvenirs);
      } else {
        throw response.data.msg;
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof axios.AxiosError
          ? err.response?.data?.message || err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return {
    data,
    blogdata,
    souvenirdata,
    edudata,
    loading,
    error,
    refetch: fetchAllData,
  };
};

export const useFetchMarketPlaceData = () => {
  const [data, setData] = useState<GetMarketPlaceDataInterface | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<GetMarketPlaceDataInterface>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/pub/alldata`,
      );

      if (response.status === 200) {
        setData(response.data);
      } else {
        throw response.data.msg;
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof axios.AxiosError
          ? err.response?.data?.message || err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchAllData,
  };
};

interface BlogDataByIresponseInterface {
  blog: BlogData;
  msg: string;
  error?: string;
}

export const useFetchBlogData = (id: string) => {
  const [blogData, setBlogData] = useState<BlogData | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<BlogDataByIresponseInterface>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/pub/blog/${id}`,
      );

      if (response.status === 200) {
        setBlogData(response.data.blog);
        setMessage(response.data.msg);
      } else {
        throw response.data.msg;
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof axios.AxiosError
          ? err.response?.data?.message || err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [id]);

  return {
    blogData,
    loading,
    error,
    message,
    refetch: fetchAllData,
  };
};