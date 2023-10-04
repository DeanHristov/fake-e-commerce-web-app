import { FC, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import InputField, { IInputFieldProps } from '../InputField';

export interface ISearchFieldProps extends Omit<IInputFieldProps, 'onChange'> {
  delay?: number;
  onChange: (ev: string) => void;
}

const SearchField: FC<ISearchFieldProps> = ({
  placeholder,
  onChange,
  delay = 300,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  const [valueText, setValueText] = useState<string>('');
  const [lazyValue] = useDebounce<string>(valueText, delay);

  useEffect(() => {
    if (lazyValue.length > 0) onChange(lazyValue);
  }, [lazyValue]);

  return (
    <InputField
      type="text"
      value={valueText}
      onChange={(ev) => setValueText(ev.target.value)}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      placeholder={placeholder}
    />
  );
};

export default SearchField;
