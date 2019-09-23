import axios from "axios";
import { getToken } from "../auth";

//url base pra não precisar repetirtoda hora
const api = axios.create({
  baseURL: "http://localhost:3500"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return Promise.resolve(config);
});

api.interceptors.response.use(
  async data => {
    return Promise.resolve(data);
  },
  error => {
    if (error.response.status === 401) {
      localStorage.clear();
      // window.location.href = "/";
    }
    return Promise.reject(error);
  }
);

export default api;
