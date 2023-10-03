'use client';

import { FC, ReactNode } from 'react';
import Spinner from '../Spinner/Spinner';

export type TButtonPresentations = 'primary' | 'secondary';

export interface IButtonProps {
  title: string;
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
  onClick = () => {},
  ...rest
}) => {
  const buttonStyles: Record<string, string> = {
    primary:
      'bg-teal-300 w-full px-4 py-2 rounded-lg text-white font-bold uppercase',
    secondary:
      'bg-white border border-teal-300 w-full px-4 py-2 rounded-lg text-cyan-700 font-normal',
  };

  return (
    <button
      className={`${buttonStyles[variant]} active:shadow-md duration-200 flex justify-center items-center gap-2`}
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
