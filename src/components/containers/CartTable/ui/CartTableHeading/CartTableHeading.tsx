import { FC } from 'react';

export interface ICartTableHeadingProps {}

const CartTableHeading: FC<ICartTableHeadingProps> = () => {
  return (
    <ul className="w-full flex border-b border-t border-b-dark border-t-dark">
      <li className="w-full px-2 py-2 text-center md:text-left">
        <span className="">Item</span>
      </li>
      <li className="w-full max-w-[8rem] px-2 py-2 hidden md:block">
        <span className="">Price</span>
      </li>
      <li className="w-full max-w-[8rem] px-2 py-2 hidden md:block">
        <span className="">Quantity</span>
      </li>
      <li className="w-full max-w-[10rem] px-2 py-2 hidden md:block">
        <span className="">Subtotal</span>
      </li>
    </ul>
  );
};

export default CartTableHeading;
