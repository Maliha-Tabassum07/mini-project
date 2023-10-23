import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8085"
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = ` ${token}`;
  }

  return config;
});

// export const axiosInstanceProductService = axios.create({
//   baseURL: "https://localhost:3001",
//   timeout: 3000,
// });

export default axiosInstance;
