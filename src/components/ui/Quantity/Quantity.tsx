import { FC, useCallback, useState } from 'react';

export interface IQuantityProps {
  onIncrease: (value: number) => void;
  onDecrease: (value: number) => void;
  initialValue?: number;
  maxValue?: number;
  className?: string;
}

const Quantity: FC<IQuantityProps> = ({
  initialValue,
  onIncrease,
  onDecrease,
  className,
  maxValue = Infinity,
}) => {
  const [quantity, setQuantity] = useState<number>(initialValue || 1);

  const handlerOnIncrease = useCallback(() => {
    const nextValue: number = quantity + 1;

    if (nextValue <= maxValue) {
      onIncrease(nextValue);
      setQuantity(nextValue);
    }
  }, [quantity, onIncrease, maxValue]);

  const handlerOnDecrease = useCallback(() => {
    const nextValue: number = quantity - 1;

    if (nextValue > 0) {
      onDecrease(nextValue);
      setQuantity(nextValue);
    }
  }, [quantity, onDecrease]);

  return (
    <div
      className={`flex justify-center items-center bg-gray-100 rounded-md border border-gray-400 ${className}`}
    >
      <button
        className="text-xl w-20 text-red-400 font-medium border-r border-r-gray-400"
        onClick={handlerOnDecrease}
      >
        {'-'}
      </button>
      <span className="w-full px-1  text-center">{quantity}</span>
      <button
        className="text-xl w-20  text-green-400 font-medium border-l border-l-gray-400"
        onClick={handlerOnIncrease}
      >
        {'+'}
      </button>
    </div>
  );
};

export default Quantity;
