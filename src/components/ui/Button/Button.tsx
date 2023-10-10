'use client';

import { FC, ReactNode } from 'react';
import Spinner from '../Spinner/Spinner';

export type TButtonPresentations = 'primary' | 'secondary';
export type TButtonType = 'submit' | 'reset' | 'button';

export interface IButtonProps {
  title: string;
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
  disabled = false,
  type = 'button',
  leftIcon,
  rightIcon,
  spinning,
  className,
  onClick = () => {},
  ...rest
}) => {
  const buttonStyles: Record<string, string> = {
    primary:
      'bg-green-600 w-full px-4 py-2 rounded-sm text-white font-bold uppercase',
    secondary:
      'bg-white border border-green-600 w-full px-4 py-2 rounded-lg text-cyan-700 font-normal',
  };

  return (
    <div className={className ?? ''}>
      <button
        disabled={disabled}
        type={type}
        className={`${disabled ? 'cursor-not-allowed' : 'cursor-pointer'} ${
          buttonStyles[variant]
        } active:shadow-md ease-in duration-200 flex justify-center items-center gap-2`}
        onClick={onClick}
        {...rest}
      >
        {leftIcon}
        {title}
        {rightIcon}
        {spinning && (
          <Spinner data-testid="spinner" width={24} color="#155e75" />
        )}
      </button>
    </div>
  );
};

export default Button;
