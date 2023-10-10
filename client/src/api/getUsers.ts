import { ApiResponse, AxiosHttpError } from "../types/api";
import { User } from "../types/user";
import { sendAxiosRequest } from "../util/axiosClient";

type GetUsersResponse = User[];

export const getUsers = async (): Promise<ApiResponse<GetUsersResponse>> => {
  const baseURL = process.env.REACT_APP_API_BASE_URL;
  const url = `${baseURL}/users`;
  try {
    const response = await sendAxiosRequest<GetUsersResponse>({
      method: "get",
      url,
    });
    return {
      data: response.data,
      status: 200,
      errorMessage: undefined,
    };
  } catch (err) {
    const axiosError = err as AxiosHttpError;
    if (axiosError.response?.data) {
      const { message } = axiosError.response.data;
      return {
        errorMessage:
          typeof message === "string" ? message : message.join(", "),
        status: axiosError.response.status,
        data: undefined,
      };
    }
    return {
      errorMessage: axiosError.message ?? "Something went wrong",
      status: axiosError.status ?? 500,
      data: undefined,
    };
  }
};
