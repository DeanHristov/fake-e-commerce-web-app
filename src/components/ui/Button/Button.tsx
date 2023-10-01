import { FC } from 'react';

export interface IButtonProps {
  title: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ title, onClick = () => {} }) => {
  return <button onClick={onClick}>{title}</button>;
};

export default Button;
