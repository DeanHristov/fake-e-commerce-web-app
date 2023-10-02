'use client';

import { FC, ReactNode, useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';

export type TButtonPresentations = 'primary' | 'secondary';

export interface IButtonProps {
  title: string;
  spinning?: boolean;
  primary?: boolean;
  secondary?: boolean;
  onClick?: () => void;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button: FC<IButtonProps> = ({
  primary,
  secondary,
  title,
  leftIcon,
  rightIcon,
  spinning,
  onClick = () => {},
}) => {
  const [presentation, setPresentation] =
    useState<TButtonPresentations>('primary');

  const buttonStyles: Record<string, string> = {
    primary:
      'bg-teal-300 w-full px-4 py-2 rounded-lg opacity-80 text-white font-bold uppercase',
    secondary:
      'bg-white border border-teal-300 w-full px-4 py-2 rounded-lg text-cyan-700 font-normal',
  };

  useEffect(() => {
    if (primary) setPresentation('primary');
    if (secondary) setPresentation('secondary');
  }, []);

  return (
    <button
      className={`${buttonStyles[presentation]} active:shadow-md duration-200 flex justify-center items-center gap-2`}
      onClick={onClick}
    >
      {leftIcon}
      {title}
      {rightIcon}
      {spinning && <Spinner data-testid="spinner" width={24} color="#155e75" />}
    </button>
  );
};

export default Button;
