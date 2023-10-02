import { FC, ReactNode } from 'react';
import Divider from '../../ui/Divider';

export interface IPageFooterProps {
  children: ReactNode;
}

const PageFooter: FC<IPageFooterProps> = ({ children }) => {
  return (
    <footer className="p-2">
      <Divider gradient />
      {children}
    </footer>
  );
};

export default PageFooter;
