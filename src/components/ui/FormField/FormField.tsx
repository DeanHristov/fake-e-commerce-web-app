'use client';

import { FC } from 'react';
import InputField, { IInputFieldProps } from '../InputField';

export interface IFormFieldProps extends IInputFieldProps {
  label: string;
}

const FormField: FC<IFormFieldProps> = ({
  label,
  name,
  value,
  id,
  type,
  onChange,
  className,
  placeholder,
}) => {
  return (
    <div className={`py-2 ${className ?? ''}`}>
      <label htmlFor={id} className="block text-xs mb-1 cursor-pointer">
        {label}
      </label>
      <InputField
        name={name}
        placeholder={placeholder}
        className="h-12"
        type={type}
        value={value}
        id={id}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;
