'use client';

import { FC, useCallback, useState } from 'react';

export interface IStarRatingProps {
  activeColor: string;
  inActiveColor: string;
  rating: number;
  starCount?: number;
  onChange?: (num: number) => void;
}

const StarRating: FC<IStarRatingProps> = ({
  rating,
  activeColor,
  inActiveColor,
  starCount = 5,
  onChange = (num: number) => {},
}) => {
  const [activeRating, setActiveRating] = useState(rating);
  const handlerClick = useCallback(
    (vote: number) => {
      setActiveRating(vote + 1);
      onChange(vote + 1);
    },
    [onChange],
  );

  const stars: string[] = Array.from({ length: starCount }, () => `☆`);
  return (
    <div data-testid="star-rating" className="flex space-x-2 items-center mt-3">
      <div className="flex space-x-1 justify-start items-baseline">
        {stars.map((star, idx) => {
          let style = inActiveColor;

          if (idx < Math.round(activeRating)) style = activeColor;

          return (
            <span
              data-testid="star-item"
              style={{ color: style }}
              key={`star-${idx}`}
              className="star-icon"
              onClick={() => handlerClick(idx)}
            >
              {star}
            </span>
          );
        })}
      </div>
      <span
        data-testid="rating"
        className="text-xs font-medium text-zambezi leading-4"
      >
        {`${rating} Reviews`}
      </span>
    </div>
  );
};

export default StarRating;
