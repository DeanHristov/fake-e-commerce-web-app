import { FC, ReactNode } from 'react';

export interface ICartTableProps {
  children: ReactNode;
}

const CartTable: FC<ICartTableProps> = ({ children }) => {
  return <>{children}</>;
};

export default CartTable;
