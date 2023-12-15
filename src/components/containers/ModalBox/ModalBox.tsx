'use client';

import { FC } from 'react';
import { useDispatch, useSelector } from '@/store';
import { closeModal, MODAL_BOX, selectModalBox } from '@/store/slices/modalBox';
import { XMarkIcon } from '@heroicons/react/24/solid';
import ProductDetails from '@/components/containers/ProductDetails';

export interface IModalBoxProps {}

const ModalBox: FC<IModalBoxProps> = ({}) => {
  const dispatch = useDispatch();
  const { isOpen, payload } = useSelector(selectModalBox);

  if (isOpen) {
    return (
      <div className="modal-box-container">
        <div className="content max-w-4xl">
          <div className="relative w-full h-10">
            <XMarkIcon
              data-testid="close-btn"
              className="absolute top-2 right-2 font-medium h-6 w-6 text-eerie-black cursor-pointer transition hover:rotate-90"
              onClick={() => dispatch(closeModal())}
            />
          </div>
          {payload.type === MODAL_BOX.SHOW_PRODUCT && (
            <ProductDetails productId={payload.productId} />
          )}
        </div>
      </div>
    );
  }

  return <div />;
};

export default ModalBox;
