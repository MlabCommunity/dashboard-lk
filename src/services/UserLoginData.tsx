import useAxios from "axios-hooks";
import { ILogin } from "types/axiosApi";

const useUserData = () => {
  const useLoginData = () =>
    useAxios<ILogin>(
      {
        url: "/identity/Auth/loginWeb",
        method: "POST",
      },
      { manual: true }
    );
  return { useLoginData };
};

export default useUserData;
