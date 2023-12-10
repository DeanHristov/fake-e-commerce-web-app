'use client';

import { ChangeEvent, FC, ReactNode } from 'react';

export type TInputFieldTypes = 'text' | 'password';

export interface IInputFieldProps {
  onChange: (ev: ChangeEvent<HTMLInputElement>) => void;

  value?: string;
  name?: string;
  className?: string;
  type?: TInputFieldTypes;
  id?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  placeholder?: string;
}

const SearchField: FC<IInputFieldProps> = ({
  type = 'text',
  className,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  return (
    <div
      className={`relative w-full rounded-lg ${
        className ?? 'h-full'
      } border border-gray-500`}
    >
      {leftIcon && (
        <div className="absolute top-1 left-2 right-auto">{leftIcon}</div>
      )}
      <input
        type={type}
        className={`h-full ${
          leftIcon ? 'pl-10 pr-6' : 'px-6'
        } w-full rounded-lg bg-white text-slate-700 ease-in duration-200 focus:bg-white`}
        {...rest}
      />
      {rightIcon && (
        <div className="absolute top-1 left-auto right-2">{rightIcon}</div>
      )}
    </div>
  );
};

export default SearchField;
