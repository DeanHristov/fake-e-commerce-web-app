'use client';

import { FC } from 'react';
import InputField, { IInputFieldProps } from '../InputField';

export interface IFormFieldProps extends IInputFieldProps {
  label: string;
  className?: string;
}

const FormField: FC<IFormFieldProps> = ({ label, onChange, className }) => {
  return (
    <div className={`py-2 ${className ?? ''}`}>
      <label htmlFor="email" className="block text-xs mb-1 cursor-pointer">
        {label}
      </label>
      <div className="h-12">
        <InputField id="email" onChange={onChange} />
      </div>
    </div>
  );
};

export default FormField;
