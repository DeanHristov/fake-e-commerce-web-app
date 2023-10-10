// ${process.env.API_URL}

import { useEffect, useState } from 'react';

export interface IFetchResponse<T, E> {
  data?: T | null;
  loading?: boolean;
  error?: E | Record<string, any> | null;
}

const useFetch = <T, E>(
  url: string,
  options?: RequestInit,
): IFetchResponse<T, E> => {
  const [response, setResponse] = useState<IFetchResponse<T, E>>({
    data: null,
    loading: false,
    error: null,
  });

  useEffect(() => {
    if (!url) return;

    setResponse((prevState) => ({ ...prevState, loading: true }));

    (async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}${url}`,
          options,
        );

        const data = await response.json();

        setResponse((prevState) => ({ ...prevState, loading: false, data }));
      } catch (error: any) {
        setResponse({
          error: error.statusText,
          loading: false,
          data: null,
        });
      }
    })();
  }, [url, options]);

  return response;
};

export default useFetch;
