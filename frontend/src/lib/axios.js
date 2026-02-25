import axios from "axios";

export const axiosInstance = axios.create({

    baseURL: import.meta.env.MODE === "production" ? "https://real-time-chat-8hpvgsqlv-abhishek-singh5s-projects.vercel.app/api" : "/api",
    withCredentials: true,

});