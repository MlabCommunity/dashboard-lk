import axios from "axios";
import { useRefreshToken } from "services/RefreshToken";
import { useHandleLogout } from "services/HandleLogout";
import jwtDecode from "jwt-decode";

const axiosInstance = axios.create({
  baseURL: "http://lappka.mobitouch.pl",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem("user")!);

    if (user) {
      config.headers = {
        Authorization: `Bearer ${user.accessToken}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const user = JSON.parse(localStorage.getItem("user")!);
      const { accessToken } = user;
      const { refreshToken } = user;
      const remember = localStorage.getItem("remember");
      interface DecodededToken {
        exp: number;
      }
      const { exp } = jwtDecode<DecodededToken>(accessToken);
      const expirationTime = exp * 1000 - 60000;
      // if (Date.now() >= expirationTime) {
      //   useHandleLogout();
      // }
      if (Date.now() >= expirationTime || remember === "true") {
        const [responseData, responseStatus] = await useRefreshToken(
          accessToken,
          refreshToken
        );
        if (responseData && responseStatus === 200) {
          localStorage.setItem(
            "user",
            JSON.stringify(responseData, refreshToken)
          );
          console.log(responseData, refreshToken);
          return axios.request(originalRequest);
        }
        if (!responseData && responseStatus !== 200) {
          useHandleLogout();
        }
      } else {
        useHandleLogout();
      }

      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
