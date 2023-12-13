import { FC } from 'react';

export interface IControlsProps {
  onRemove: () => void;
  onWishList: () => void;
  className?: string;
}

const RowControls: FC<IControlsProps> = ({
  onRemove,
  onWishList,
  className = '',
}) => {
  return (
    <div className={`text-black text-sm ${className}`}>
      <span
        data-testid={'btn-remove'}
        onClick={onRemove}
        className="hover:underline hover:cursor-pointer hover:text-dark"
      >
        Remove
      </span>
      {' / '}
      <span
        data-testid={'btn-wish-list'}
        onClick={onWishList}
        className="hover:underline hover:cursor-pointer hover:text-dark"
      >
        Wish list
      </span>
    </div>
  );
};

export default RowControls;
