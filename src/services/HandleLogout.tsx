import axios from "axios";

export const revokeToken = async (token: string) => {
  await axios({
    method: "post",
    url: "http://lappka.mobitouch.pl/identity/Auth/revokeToken",
    data: {
      refreshToken: token,
    },
  });
};

export const useHandleLogout = async () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  await revokeToken(user.refreshToken);
  localStorage.removeItem("user");
  localStorage.removeItem("remember");
};
