import ky, { Options } from "ky-universal";

export const fetcher = async <T>(url: string, options?: Options) => {
  return await ky(url, options).json<T>();
};
