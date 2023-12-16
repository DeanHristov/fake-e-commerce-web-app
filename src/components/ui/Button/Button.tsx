'use client';

import { FC, ReactNode } from 'react';
import Spinner from '@/components/ui/Spinner';

export type TButtonPresentations = 'primary' | 'secondary';
export type TButtonType = 'submit' | 'reset' | 'button';

export interface IButtonProps {
  title?: string;
  type?: TButtonType;
  className?: string;
  disabled?: boolean;
  spinning?: boolean;
  variant?: TButtonPresentations;
  onClick?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button: FC<IButtonProps> = ({
  variant = 'primary',
  title,
  leftIcon,
  rightIcon,
  spinning,
  className,
  disabled = false,
  onClick = () => {},
  ...rest
}) => {
  const buttonStyles: Record<string, string> = {
    primary:
      'bg-green-600 text-white font-bold uppercase bg-primary hover:bg-hover',
    secondary: 'bg-white border border-green-600 text-dark font-normal',
  };

  return (
    <button
      disabled={disabled}
      className={`${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      } ${
        buttonStyles[variant]
      } hover:shadow-lg transition transform active:scale-90 duration-200 ease-in w-full px-4 py-1.5 flex justify-center items-center gap-2 ${className}`}
      onClick={onClick}
      {...rest}
    >
      {leftIcon}
      {title}
      {rightIcon}
      {spinning && <Spinner data-testid="spinner" width={24} color="#155e75" />}
    </button>
  );
};

export default Button;
