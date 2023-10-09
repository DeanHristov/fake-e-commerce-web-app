// ${process.env.API_URL}

import { useEffect, useState } from 'react';

export interface IFetchResponse<T, E> {
  data?: T;
  loading?: boolean;
  error?: E | Record<string, any> | null;
}

const useFetch = <T, E>(
  url: string,
  options?: RequestInit,
): IFetchResponse<T, E> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<E | Record<string, any> | null>(null);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    setError(null);

    (async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}${url}`,
        options,
      );

      if (!response.ok) {
        setLoading(false);
        setError({ msg: response.statusText });
      }

      const data = await response.json();
      setLoading(false);
      setData(data);
    })();
  }, [url, options]);

  return { data, loading, error };
};

export default useFetch;
