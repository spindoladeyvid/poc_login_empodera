import type { AxiosInstance, AxiosResponse } from "axios";

export const attachApiInterceptors = (
  api: AxiosInstance,
  interceptors: { statusCode: number; callback: () => any }[]
) => {
  const intercept = (response: AxiosResponse) => {
    for (const interceptor of interceptors) {
      if (interceptor.statusCode === response.status) {
        interceptor.callback();
        return true;
      }
    }
    return false;
  };

  api.interceptors.response.use(
    (response) => {
      intercept(response);
      return response;
    },
    (error) => {
      intercept(error.response);
      return error.response;
    }
  );
};

export const attachAuthHeaders = (api: AxiosInstance, token: string) => {
  api.defaults.headers["Authorization"] = `Bearer ${token}`;
};

export const removeAuthHeaders = (api: AxiosInstance) => {
  api.defaults.headers["Authorization"] = "";
};
