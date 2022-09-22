import axiosInstance from "api/axios";

export const revokeToken = async (token: string) => {
  await axiosInstance.post("/identity/Auth/revokeToken", {
    token,
  });
};

export const useHandleLogout = async () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  console.log(user);
  await revokeToken(user.refreshToken);
  localStorage.removeItem("user");
  localStorage.removeItem("remember");
};
