import {useEffect, useState} from 'react';

//@see: https://nextjs.org/docs/messages/react-hydration-error
export function useIsClient(): boolean {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return isClient;
}
