import axios from "axios";

export const axiosInstance = axios.create({

    baseURL: import.meta.env.MODE === "production" ? "https://real-time-chat-app-ssvq.onrender.com/api" : "/api",
    withCredentials: true,

});