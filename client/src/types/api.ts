import { AxiosError } from "axios";

export type ApiResponse<T> =
  | {
      data: T;
      status: 200 | 201;
      errorMessage: undefined;
    }
  | {
      data: undefined;
      errorMessage: string;
      status: number;
    };

type HttpError = {
  statusCode: number;
  message: string | string[];
  error: string;
};

export type AxiosHttpError = AxiosError<HttpError>;
