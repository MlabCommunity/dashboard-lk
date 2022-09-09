import useAxios from "axios-hooks";
import { IRegisterFields } from "types/axiosApi";

const userNewPasswordData = () => {
  const newPasswordData = () =>
    useAxios<IRegisterFields>(
      {
        url: "/auth/setNewPassword",
        method: "POST",
      },
      { manual: true }
    );
  return { newPasswordData };
};

export default userNewPasswordData;
