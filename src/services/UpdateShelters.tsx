import useAxios from "axios-hooks";
import { IRegisterShelter } from "types/axiosApi";

export const useUpdateOrganization = () => {
  const useOrganizationData = () =>
    useAxios<IRegisterShelter>(
      {
        url: "/pet/shelters",
        method: "PUT",
      },
      { manual: true }
    );
  return { useOrganizationData };
};

export const useUpdateUser = () => {
  const useUserData = () =>
    useAxios<IRegisterShelter>(
      {
        url: "/identity/User",
        method: "PATCH",
      },
      { manual: true }
    );
  return { useUserData };
};

export const useUpdatePassword = () => {
  const usePasswordData = () =>
    useAxios<IRegisterShelter>(
      {
        url: "/identity/User/Password",
        method: "PATCH",
      },
      { manual: true }
    );
  return { usePasswordData };
};

export const useUpdateEmail = () => {
  const useEmailData = () =>
    useAxios<IRegisterShelter>(
      {
        url: "/identity/User/Email",
        method: "PATCH",
      },
      { manual: true }
    );
  return { useEmailData };
};
