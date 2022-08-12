import useAxios from "axios-hooks";
import { IRegisterFields } from "types/axiosApi";

const useRegisterData = () => {
  const useData = () =>
    useAxios<IRegisterFields>(
      {
        url: "/auth/signup",
        method: "POST",
      },
      { manual: true }
    );
  return { useData };
};

export default useRegisterData;
