import useAxios from "axios-hooks";
import { IRegister } from "types/axiosApi";

const useRegisterData = () => {
  const useData = () =>
    useAxios<IRegister>(
      {
        url: "/auth/signup",
        method: "POST",
      },
      { manual: true }
    );
  return { useData };
};

export default useRegisterData;
