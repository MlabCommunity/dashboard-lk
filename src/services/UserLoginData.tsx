import useAxios from "axios-hooks";
import { ILogin } from "types/axiosApi";

const useUserData = () => {
  const useLoginData = () =>
    useAxios<ILogin>(
      {
        url: "/auth/signin",
        method: "POST",
      },
      { manual: true }
    );
  return { useLoginData };
};

export default useUserData;
