import useAxios from "axios-hooks";
import {
  IEmail,
  IUpdateOrganizationData,
  IUpdateUserData,
  IUpdatePassword,
} from "types/axiosApi";

export const useUpdateOrganization = () => {
  const useOrganizationData = () =>
    useAxios<IUpdateOrganizationData>(
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
    useAxios<IUpdateUserData>(
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
    useAxios<IUpdatePassword>(
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
    useAxios<IEmail>(
      {
        url: "/identity/User/Email",
        method: "PATCH",
      },
      { manual: true }
    );
  return { useEmailData };
};
