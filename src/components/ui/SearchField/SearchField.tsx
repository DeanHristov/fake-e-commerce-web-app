import { FC, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import InputField, { IInputFieldProps } from '../InputField';

export interface ISearchFieldProps extends IInputFieldProps {
  delay?: number;
}

const SearchField: FC<ISearchFieldProps> = ({
  placeholder,
  onChange = () => {},
  delay = 300,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const [valueText, setValueText] = useState<string>('');
  const [lazyValue] = useDebounce(valueText, delay);

  useEffect(() => onChange(lazyValue), [lazyValue]);

  return (
    <InputField
      type="text"
      onChange={(value) => setValueText(value)}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default SearchField;
