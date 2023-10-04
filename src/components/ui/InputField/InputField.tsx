'use client';

import { ChangeEvent, FC, ReactNode, useCallback, useState } from 'react';

export type TInputFieldTypes = 'text' | 'password';

export interface IInputFieldProps {
  onChange: (value: string) => void;
  type?: TInputFieldTypes;
  id?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  placeholder?: string;
}

const SearchField: FC<IInputFieldProps> = ({
  type = 'text',
  id,
  placeholder,
  onChange,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const [value, setValue] = useState<string>('');

  const handlerOnChange = useCallback(
    (ev: ChangeEvent<HTMLInputElement>) => {
      const value = ev.target.value;
      setValue(value);
      onChange && onChange(value);
    },
    [value],
  );

  return (
    <div className="relative w-full rounded-lg h-full border border-gray-500">
      {leftIcon && (
        <div className="absolute top-1 left-2 right-auto">{leftIcon}</div>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={handlerOnChange}
        placeholder={placeholder}
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
