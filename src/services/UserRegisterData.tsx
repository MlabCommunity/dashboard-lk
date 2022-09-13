import useAxios from "axios-hooks";
import { IRegisterShelter } from "types/axiosApi";

const useRegisterData = () => {
  const useData = () =>
    useAxios<IRegisterShelter>(
      {
        url: "identity/Auth/shelterRegister",
        method: "POST",
      },
      { manual: true }
    );
  return { useData };
};

export default useRegisterData;
