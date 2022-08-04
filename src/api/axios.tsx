import axios from "axios";
import { refreshToken } from "services/RefreshToken";

const axiosInstance = axios.create({
  baseURL: "http://lappka.mobitouch.pl/api/identity",
});

axios.interceptors.request.use(
  async (config) => {
    const user = localStorage.getItem("user");

    if (user) {
      config.headers = {
        Authorization: `Bearer ${user}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const { config } = error;
    const user = JSON.parse(localStorage.getItem("user")!);

    if (error.response.status === 401 && !config._retry) {
      config._retry = true;

      const [data] = await refreshToken(user.refreshToken);

      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
        return axios.request(config);
      }

      return axios(config);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
