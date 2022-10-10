import { AxiosResponse } from "axios";

import axiosInstance from "api/axios";
import type { IResponse } from "types/axiosApi";

export const useRefreshToken = async (
  accessToken: string,
  refreshToken: string
) => {
  const response: AxiosResponse<IResponse> = await axiosInstance.post(
    "/identity/Auth/useToken",
    {
      accessToken,
      refreshToken,
    }
  );
  return [response.data.accessToken, response.status];
};
