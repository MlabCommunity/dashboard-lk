import useAxios from "axios-hooks";
import { IEmail, IResetPassword } from "types/axiosApi";

export const useEmailData = () => {
  const useEmail = () =>
    useAxios<IEmail>(
      {
        url: "/identity/Auth/resetPassword",
        method: "POST",
      },
      { manual: true }
    );
  return { useEmail };
};

export const useResetPasswordData = () => {
  const useResetPassword = (token: string) =>
    useAxios<IResetPassword>(
      {
        url: `/identity/Auth/setNew/Password/${token}`,
        method: "POST",
      },
      { manual: true }
    );
  return { useResetPassword };
};
