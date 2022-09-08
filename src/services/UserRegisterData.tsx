import useAxios from "axios-hooks";
import { IRegisterFields } from "types/axiosApi";

const useRegisterData = () => {
  const useData = () =>
    useAxios<IRegisterFields>(
      {
        url: "identity/Auth/signup",
        method: "POST",
      },
      { manual: true }
    );
  return { useData };
};

export default useRegisterData;
