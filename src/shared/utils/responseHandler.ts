import { Response } from 'express';

export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
};
 

export const handleResponse = <T>(res: Response, data: T | null, error: string | null = null): Response<ApiResponse<T>> => {
  const response: ApiResponse<T> = {
    data,
    error,
  };
  return res.json(response);
};
