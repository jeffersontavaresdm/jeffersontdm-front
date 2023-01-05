import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://127.0.0.1:3200/api/v1",
  headers: {
    "Content-Type": "application/json"
  }
})

// axiosClient.interceptors.response.use(response => response.data);

export default axiosClient;