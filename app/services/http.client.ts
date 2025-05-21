// utils/axiosClient.js
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001/", // Replace with your API base URL
  headers: {
    "Content-Type": "application/json",
  },
  // Add other config like auth token here if needed
});

// Optional: Add interceptors for auth/error handling
axiosClient.interceptors.response.use(
  (response: any) => response,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosClient;
