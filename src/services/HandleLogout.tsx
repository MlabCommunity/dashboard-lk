import axiosInstance from "api/axios";

export const revokeToken = async (refreshToken: string) => {
  await axiosInstance.post("/identity/Auth/revokeToken", {
    refreshToken,
  });
};

export const useHandleLogout = async () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  await revokeToken(user.refreshToken);
  localStorage.removeItem("user");
  localStorage.removeItem("remember");
};
