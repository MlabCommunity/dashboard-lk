import { AxiosResponse } from "axios";

import axiosInstance from "api/axios";
import type { IResponse } from "types/axiosApi";

export const refreshToken = async (token: string) => {
  const response: AxiosResponse<IResponse> = await axiosInstance.post(
    "/identity/Auth/useToken",
    {
      token,
    }
  );
  return [response.data, response.status];
};
