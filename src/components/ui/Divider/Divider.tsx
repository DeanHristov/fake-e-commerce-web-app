'use client';

import { FC } from 'react';

export interface IDividerProps {
  color?: string;
  abv?: boolean;
  gradient?: boolean;
}

const Divider: FC<IDividerProps> = ({ color, gradient = false }) => {
  const gradientStyles = `w-full h-px m-auto bg-gradient-to-r from-transparent ${
    color ?? 'via-gray-400'
  } to-transparent`;
  const defaultStyles = `w-full m-auto border-b ${color ?? 'border-gray-400'}`;

  return <div className={gradient ? gradientStyles : defaultStyles} />;
};

export default Divider;
