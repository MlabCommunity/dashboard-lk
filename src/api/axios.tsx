import axios from "axios";
import { useNavigate } from "react-router-dom";
import { refreshToken } from "services/RefreshToken";
import { useHandleLogout } from "services/HandleLogout";

const axiosInstance = axios.create({
  baseURL: "http://lappka.mobitouch.pl",
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
    const remember = localStorage.getItem("remember");

    if (error.response.status === 401 && remember === "true") {
      config._retry = true;

      const expiryDate = new Date(user.expires * 1000);
      const expiryTimeout = new Date(
        expiryDate.setDate(expiryDate.getDate() + 1)
      );
      const navigate = useNavigate();
      if (expiryTimeout > new Date()) {
        const [data, refreshTokenStatus] = await refreshToken(
          user.refreshToken
        );
        if (data && refreshTokenStatus === 204) {
          localStorage.setItem("user", JSON.stringify(data));
          return axios.request(config);
        }

        if (refreshTokenStatus !== 204) {
          useHandleLogout();
          navigate("/auth/LoginForm");
        }
      } else {
        useHandleLogout();
        navigate("/auth/LoginForm");
      }

      return axios(config);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
