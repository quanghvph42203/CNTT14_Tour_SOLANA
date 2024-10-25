import axios from "axios";

const instance = axios.create({
    // baseURL: import.meta.env.VITE_BASE_URL
    baseURL: "http://localhost:8080/api",
    headers: {
        "Content-Type": "application/json",
    },
    // baseURL: "http://localhost:3000"
});
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default instance;
