import { ChangeEvent, FC, ReactNode, useEffect, useState } from 'react';

export type TInputFieldTypes = 'text' | 'password';

export interface IInputFieldProps {
  onChange: (value: string) => void;
  type?: TInputFieldTypes;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  placeholder?: string;
}

const SearchField: FC<IInputFieldProps> = ({
  type = 'text',
  placeholder,
  onChange,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => onChange && onChange(value), [value]);

  return (
    <div className="relative w-full rounded-lg h-10 border border-gray-500">
      {leftIcon && (
        <div className="absolute top-1 left-2 right-auto">{leftIcon}</div>
      )}
      <input
        type={type}
        value={value}
        onChange={(ev: ChangeEvent<HTMLInputElement>) =>
          setValue(ev.target.value)
        }
        placeholder={placeholder}
        className={`h-full ${
          leftIcon ? 'pl-10 pr-6' : 'px-6'
        } w-full rounded-lg bg-gray-200 text-slate-700`}
        {...rest}
      />
      {rightIcon && (
        <div className="absolute top-1 left-auto right-2">{rightIcon}</div>
      )}
    </div>
  );
};

export default SearchField;
