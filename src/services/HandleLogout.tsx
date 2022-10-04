import axiosInstance from "api/axios";
import { history } from "./ProtectedRoute";

const revokeToken = async (token: string) => {
  try {
    const response = await axiosInstance.post("/identity/Auth/revokeToken", {
      refreshToken: token,
    });
    return response.status;
  } catch (error) {
    return error;
  }
};
export const useHandleLogout = async () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  const rToken = user.refreshToken;

  const responseStatus = await revokeToken(rToken);

  if (Number(responseStatus) === 204) {
    localStorage.removeItem("user");
    localStorage.removeItem("remember");
    history.push("/auth/LoginForm");
  }
};
