import { Utils } from '@/utils/Utils';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const useToastError = (error: string | null) => {
  useEffect(() => {
    if (Utils.isNotNull(error)) {
      toast.error(error, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
    }
  }, [error]);
};

export default useToastError;
