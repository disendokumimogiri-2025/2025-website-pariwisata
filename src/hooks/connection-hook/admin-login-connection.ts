import { useState } from "react";
import axios, { AxiosError } from "axios";
import { STORAGE_KEY_AUTHTOKEN } from "@/context-provider/context-provider-type";

interface LoginResponse {
  msg: string;
  token: string;
  expiredAt?: number;
}

interface ErrorResponse {
  msg?: string;
  error?: string;
}

export const useAdminLogin = <TPayload>() => {
  const [message, setMessage] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem(STORAGE_KEY_AUTHTOKEN)
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (payload: TPayload): Promise<string> => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const response = await axios.post<LoginResponse>(
        `${import.meta.env.VITE_PUBLIC_API_URl_PROD}/login`,
        payload
      );

      // backend return 200
      if (response.status !== 200) {
        throw new Error(response.data.msg || "Login failed");
      }

      const { token, msg } = response.data;

      setToken(token);
      setMessage(msg);

      localStorage.setItem(STORAGE_KEY_AUTHTOKEN, token);

      return token;
    } catch (err: unknown) {
      let errorMessage = "Something went wrong";

      if (err instanceof AxiosError) {
        const errorData = err.response?.data as ErrorResponse;
        errorMessage =
          errorData?.msg ||
          errorData?.error ||
          err.message;
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }

      setError(errorMessage);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setMessage(null);
    localStorage.removeItem(STORAGE_KEY_AUTHTOKEN);
  };

  return {
    token,
    message,
    loading,
    error,
    login,
    logout,
  };
};
