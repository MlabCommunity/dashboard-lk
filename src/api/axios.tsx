import axios from "axios";

const headers = {
  asdd: "das",
  asdsda: "das",
};

export const axiosInstance = axios.create({
  baseURL: "http://lappka.mobitouch.pl/api/identity",
  headers,
});

// if (localStorage.token) {
//   headers.Authorization = `Bearer ${localStorage.token}`;
// }

// axiosInstance.interceptors.request.use((config) =>
//   // config.params = config.params || {};

//    config
// );
// axiosInstance.interceptors.request.use((response) => {
//   console.log(response);
// });

export default axiosInstance;
