import { FC, ReactNode } from 'react';

export interface IBadgeProps {
  children: ReactNode;
  counter?: number;
  dot?: boolean;
  color?: string;
  onClick?: () => void;
}

const Badge: FC<IBadgeProps> = ({ children, onClick, counter, dot, color }) => {
  return (
    <span
      onClick={onClick}
      className="relative inline-block px-2 cursor-pointer"
    >
      {children}
      {counter && (
        <span
          className={`absolute top-0 right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 ${
            color ?? 'bg-red-600'
          } rounded-full`}
        >
          {counter}
        </span>
      )}
      {!counter && dot && (
        <span
          className={`absolute top-0 right-2 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 ${
            color ?? 'bg-red-600'
          } rounded-full`}
        />
      )}
    </span>
  );
};

export default Badge;
