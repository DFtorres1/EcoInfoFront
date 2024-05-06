import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from "axios";

const onRequest = (
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig => {
    const configuration = config;
  
    return configuration;
  };
  
  const onRequestError = (error: AxiosError): Promise<AxiosError> =>
    Promise.reject(error);
  
  const getCustomAxiosInstance = (
    axiosInstance: AxiosInstance
  ): AxiosInstance => {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
  
    return axiosInstance;
  };
  
  const api = getCustomAxiosInstance(
    axios.create({
      // baseURL: import.meta.env.API_URL as string,
      baseURL: "http://localhost:8000/api",
      withCredentials: false,
    })
  );
  
  export default api;