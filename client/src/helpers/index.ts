import axios, { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({ baseURL: baseURL });

axiosInstance.interceptors.request.use(
  (req: any) => {
    const userString = localStorage.getItem("user");
    req.headers = req.headers || {};
    if (userString) {
      const user: any = JSON.parse(userString); // Parse userString
      req.headers.Authorization = `Bearer ${user.token}`;
    }
    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);

const showToastMessage = (
  message: string,
  notificationType: "error" | "success"
) => {
  const toastOptions: any = {
    autoClose: 5000,
    hideProgressBar: true,
    style: { fontSize: "16px" },
  };

  if (notificationType === "error") {
    toast.error(`Error! ${message}`, toastOptions);
  } else if (notificationType === "success") {
    toast.success(`${message}`, toastOptions);
  }
};
//check for error
const checkError = (error: any) => {
  const { message } = error.response.data;
  showToastMessage(message, "error");
};

const successMessage = (message: string) => {
  showToastMessage(message, "success");
};

// export const axiosGet = async (url: string, params?: any) => {
//   try {
//     let request = await axiosInstance.get(url, { params });
//     return request;
//   } catch (error: any) {
//     checkError(error);
//   }
// };

// export const axiosPost = async (url: string, body: any, message: string) => {
//   try {
//     let request = await axiosInstance.post(url, body);
//     if (request.data && request.status === 200) {
//       await successMessage(message || "Data Added Successfully!");
//     }

//     return request;
//   } catch (error: any) {
//     checkError(error);
//   }
// };

// export const axiosPatch = async (url: string, body: any, message: string) => {
//   try {
//     let request = await axiosInstance.patch(url, body);
//     if (request.data && request.status === 200) {
//       await successMessage(message);
//     }
//   } catch (error) {
//     checkError(error);
//   }
// };

// export const axiosPut = async (url: string, body: any, message: string) => {
//   try {
//     let request = await axiosInstance.put(url, body);
//     if (request.data && request.status === 200) {
//       await successMessage(message);
//     }
//   } catch (error) {
//     checkError(error);
//   }
// };

const handleRequest = async (
  requestFunc: any,
  url: string,
  data: any,
  type: "get" | "post" | "patch" | "put",
  successMessage?: string
) => {
  try {
    const request = await requestFunc(url, data);
    if (request.data && request.status === 200 && type !== "get") {
      showToastMessage(successMessage || "Operation Successful", "success");
    }
    return request;
  } catch (error) {
    handleRequestError(error);
    throw error;
  }
};

const handleRequestError = (error: any) => {
  checkError(error);
};

export const axiosRequest = {
  get: (url: string, params?: any) =>
    handleRequest(axiosInstance.get, url, { params }, "get"),
  post: (url: string, data: any, successMessage: string) =>
    handleRequest(axiosInstance.post, url, data, "post", successMessage),
  patch: (url: string, data: any, successMessage: string) =>
    handleRequest(axiosInstance.patch, url, data, "patch", successMessage),
  put: (url: string, data: any, successMessage: string) =>
    handleRequest(axiosInstance.put, url, data, "put", successMessage),
};