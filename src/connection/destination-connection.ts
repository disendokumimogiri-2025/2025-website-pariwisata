import { useEffect, useState } from "react";
import axios from "axios";
import {
  DestinationDataInterface,
  CulinaryDataInterface,
  EducationDataInterface,
} from "../constant/data-types";

interface FetchAllDataResponse {
  culinary: CulinaryDataInterface[];
  destination: DestinationDataInterface[];
  education: EducationDataInterface[];
  msg: string;
}

export const useFetchAllData = () => {
  const [data, setData] = useState<FetchAllDataResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAllData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get<FetchAllDataResponse>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/all`,
      );

      setData(response.data);
    } catch (err: unknown) {
      const errorMessage = err instanceof axios.AxiosError
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
    refetch: fetchAllData, // optional kalau mau fetch ulang
  };
};
