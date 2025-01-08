import { recipesApi } from '~/src/api';

enum HttpMethodEnum {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

type HttpMethod = keyof typeof HttpMethodEnum;

const axiosBaseQuery =
  () =>
  async ({
    url,
    method,
    data,
    params,
    headers,
  }: {
    url: string;
    method: HttpMethod;
    data?: any;
    params?: any;
    headers?: any;
  }) => {
    try {
      const baseUrl = recipesApi.getUri();
      const result = await recipesApi({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError;
      return {
        error: {
          status: (err as { response?: { status: number } }).response?.status,
          data:
            (err as { response?: { data: any } })?.response?.data ||
            (err as { message: string })?.message,
        },
      };
    }
  };

export { axiosBaseQuery };
