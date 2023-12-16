'use client';
import { FC, ReactNode } from 'react';

export interface IWizardContentProps {
  children: ReactNode;
  isActive?: boolean;
}

const WizardContent: FC<IWizardContentProps> = ({
  isActive = false,
  children,
}) => {
  return (
    <div
      className={`w-full h-full px-2 py-2 border-t border-t-gray-300 ${
        isActive ? 'block fade-in' : 'hidden fade-out'
      }`}
    >
      {children}
    </div>
  );
};

export default WizardContent;
