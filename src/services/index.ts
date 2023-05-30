import axios from "axios";

export const apiUrl = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    Authorization: "",
  },
});
