import { useEffect, useState } from "react";
import axios from "axios";
import type {
  BlogData,
  EducationData,
  GalleryData,
  InternalWebsitePageData,
  SouvenirData,
} from "@/types/data-types";
import { STORAGE_KEY_AUTHTOKEN } from "@/context-provider/context-provider-type";

export const useCreateBlog = <TPayload, TBlog>() => {
  const [blog, setBlog] = useState<TBlog | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem(STORAGE_KEY_AUTHTOKEN);
  const headerName = import.meta.env.VITE_SERVER_PRIVATE_ADMIN_HEADER;

  const createBlog = async (payload: TPayload) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post<{
        msg: string;
        blog: TBlog;
      }>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/adm/create/blog`,
        payload,
        {
          headers: {
            [headerName]: token,
          },
        },
      );

      if (response.status === 201) {
        setBlog(response.data.blog);
        setMessage(response.data.msg);
        return response.data.blog;
      }

      throw new Error(response.data.msg);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof axios.AxiosError
          ? err.response?.data?.msg || err.response?.data?.error || err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong";

      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    blog,
    message,
    loading,
    error,
    createBlog,
  };
};

interface AdminBlogDataresponseInterface {
  blogs: BlogData[];
  educations: EducationData[];
  souvenirs: SouvenirData[];
  gallery: GalleryData[];
  page: InternalWebsitePageData[];
  msg: string;
  error?: string;
}

export const useFetchAllDataForAdmin = () => {
  const [blogData, setdata] = useState<BlogData[]>([]);
  const [eduData, setEduData] = useState<EducationData[]>([]);
  const [souvenirData, setSouvenirData] = useState<SouvenirData[]>([]);
  const [galleyData, setGalleyData] = useState<GalleryData[]>([]);
  const [pageData, setPageData] = useState<InternalWebsitePageData | null>(
    null,
  );

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem(STORAGE_KEY_AUTHTOKEN);
    const headerName = import.meta.env.VITE_SERVER_PRIVATE_ADMIN_HEADER;

    try {
      const response = await axios.get<AdminBlogDataresponseInterface>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/adm/content`,
        {
          headers: {
            [headerName]: token,
          },
        },
      );

      if (response.status === 200) {
        setdata(response.data.blogs);
        setEduData(response.data.educations);
        setSouvenirData(response.data.souvenirs);
        setGalleyData(response.data.gallery);
        setPageData(response.data.page[0] ?? null);
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
  }, []);

  return {
    blogData,
    eduData,
    souvenirData,
    pageData,
    galleyData,
    loading,
    error,
    message,
    refetch: fetchAllData,
  };
};

export const useUpdatePagesCOntent = <TPayload, Tinternalwebdata>(
  id: string,
) => {
  const [internalwebdata, setInternalwebdata] =
    useState<Tinternalwebdata | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem(STORAGE_KEY_AUTHTOKEN);
  const headerName = import.meta.env.VITE_SERVER_PRIVATE_ADMIN_HEADER;

  const updateInternalwebdata = async (payload: TPayload) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.patch<{
        msg: string;
        data: Tinternalwebdata;
      }>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/adm/update/pagescontent/${id}`,
        payload,
        {
          headers: {
            [headerName]: token,
          },
        },
      );

      if (response.status === 201) {
        setInternalwebdata(response.data.data);
        setMessage(response.data.msg);
        return response.data.data;
      }

      throw new Error(response.data.msg);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof axios.AxiosError
          ? err.response?.data?.msg || err.response?.data?.error || err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong";

      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    internalwebdata,
    message,
    loading,
    error,
    updateInternalwebdata,
  };
};

export const useUpdateBlog = <TPayload, Tdata>(id: string) => {
  const [blog, setBlog] = useState<Tdata | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateBlogData = async (payload: TPayload) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    const token = localStorage.getItem(STORAGE_KEY_AUTHTOKEN);
    const headerName = import.meta.env.VITE_SERVER_PRIVATE_ADMIN_HEADER;

    try {
      const response = await axios.patch<{
        msg: string;
        data: Tdata;
      }>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/adm/update/blog/${id}`,
        payload,
        {
          headers: {
            [headerName]: token,
          },
        },
      );

      if (response.status === 200) {
        setBlog(response.data.data);
        setMessage(response.data.msg);
        return response.data.data;
      }

      throw new Error(response.data.msg);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof axios.AxiosError
          ? err.response?.data?.msg || err.response?.data?.error || err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong";

      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    blog,
    message,
    loading,
    error,
    updateBlogData,
  };
};

export const useUpdateEdu = <TPayload, Tdata>(id: string) => {
  const [edu, setEdu] = useState<Tdata | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem(STORAGE_KEY_AUTHTOKEN);
  const headerName = import.meta.env.VITE_SERVER_PRIVATE_ADMIN_HEADER;

  const updateEduData = async (payload: TPayload) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.patch<{
        msg: string;
        data: Tdata;
      }>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/adm/update/edu/${id}`,
        payload,
        {
          headers: {
            [headerName]: token,
          },
        },
      );

      if (response.status === 200) {
        setEdu(response.data.data);
        setMessage(response.data.msg);
        return response.data.data;
      }

      throw new Error(response.data.msg);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof axios.AxiosError
          ? err.response?.data?.msg || err.response?.data?.error || err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong";

      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    edu,
    message,
    loading,
    error,
    updateEduData,
  };
};

export const useCreateEducation = <TPayload, Tdata>() => {
  const [edu, setEdu] = useState<Tdata | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem(STORAGE_KEY_AUTHTOKEN);
  const headerName = import.meta.env.VITE_SERVER_PRIVATE_ADMIN_HEADER;

  const createEduData = async (payload: TPayload) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post<{
        msg: string;
        data: Tdata;
      }>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/adm/create/edu`,
        payload,
        {
          headers: {
            [headerName]: token,
          },
        },
      );

      if (response.status === 201) {
        setEdu(response.data.data);
        setMessage(response.data.msg);
        return response.data.data;
      }

      throw new Error(response.data.msg);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof axios.AxiosError
          ? err.response?.data?.msg || err.response?.data?.error || err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong";

      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    edu,
    message,
    loading,
    error,
    createEduData,
  };
};

export const useCreateSouvenir = <TPayload, Tdata>() => {
  const [souvenir, setSouvenir] = useState<Tdata | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem(STORAGE_KEY_AUTHTOKEN);
  const headerName = import.meta.env.VITE_SERVER_PRIVATE_ADMIN_HEADER;

  const createSouvenir = async (payload: TPayload) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post<{
        msg: string;
        data: Tdata;
      }>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/adm/create/souvenir`,
        payload,
        {
          headers: {
            [headerName]: token,
          },
        },
      );

      if (response.status === 201) {
        setSouvenir(response.data.data);
        setMessage(response.data.msg);
        return response.data.data;
      }

      throw new Error(response.data.msg);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof axios.AxiosError
          ? err.response?.data?.msg || err.response?.data?.error || err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong";

      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    souvenir,
    message,
    loading,
    error,
    createSouvenir,
  };
};

export const useCreateGallery = <TPayload, Tdata>() => {
  const [gallery, setGallery] = useState<Tdata | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem(STORAGE_KEY_AUTHTOKEN);
  const headerName = import.meta.env.VITE_SERVER_PRIVATE_ADMIN_HEADER;

  const createGallery = async (payload: TPayload) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post<{
        msg: string;
        data: Tdata;
      }>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/adm/create/gallery`,
        payload,
        {
          headers: {
            [headerName]: token,
          },
        },
      );

      if (response.status === 201) {
        setGallery(response.data.data);
        setMessage(response.data.msg);
        return response.data.data;
      }

      throw new Error(response.data.msg);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof axios.AxiosError
          ? err.response?.data?.msg || err.response?.data?.error || err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong";

      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    gallery,
    message,
    loading,
    error,
    createGallery,
  };
};

export const useUpdateSouvenir = <TPayload, Tdata>(id: string) => {
  const [souvenir, setSouvenir] = useState<Tdata | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem(STORAGE_KEY_AUTHTOKEN);
  const headerName = import.meta.env.VITE_SERVER_PRIVATE_ADMIN_HEADER;

  const updateSouvenirData = async (payload: TPayload) => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.patch<{
        msg: string;
        data: Tdata;
      }>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/adm/update/souvenir/${id}`,
        payload,
        {
          headers: {
            [headerName]: token,
          },
        },
      );

      if (response.status === 200) {
        setSouvenir(response.data.data);
        setMessage(response.data.msg);
        return response.data.data;
      }

      throw new Error(response.data.msg);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof axios.AxiosError
          ? err.response?.data?.msg || err.response?.data?.error || err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong";

      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    souvenir,
    message,
    loading,
    error,
    updateSouvenirData,
  };
};

export const useDeleteData = <TResponse>(
  endpoint: "blog" | "edu" | "souvenir" | "gallery",
  id: string,
) => {
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const token = localStorage.getItem(STORAGE_KEY_AUTHTOKEN);
  const headerName = import.meta.env.VITE_SERVER_PRIVATE_ADMIN_HEADER;

  const deleteData = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.delete<{
        msg: string;
        data: TResponse;
      }>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/adm/delete/${endpoint}/${id}`,
        {
          headers: {
            [headerName]: token,
          },
        },
      );

      if (response.status === 200) {
        setMessage(response.data.msg);
        return response.data.data;
      }

      throw new Error(response.data.msg);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof axios.AxiosError
          ? err.response?.data?.msg || err.message
          : err instanceof Error
            ? err.message
            : "Something went wrong";

      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    message,
    loading,
    error,
    deleteData,
  };
};
