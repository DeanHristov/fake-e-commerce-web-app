'use client';
import { FC } from 'react';
import {
  BuildingOffice2Icon,
  PencilSquareIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { ACTIVE_VARIANT } from '@/components/containers/CheckoutWizard/CheckoutWizard';

export interface IWizardHeadingProps {
  active: ACTIVE_VARIANT;
  onClick: (value: number) => void;
  variant: ACTIVE_VARIANT;
  disabled?: boolean;
}

const WizardHeading: FC<IWizardHeadingProps> = ({
  active,
  variant,
  onClick,
  disabled = false,
}) => {
  const shouldDisabled: boolean = disabled || active !== variant;

  return (
    <div
      className={`wizard-heading ${
        shouldDisabled ? 'border-gray-300' : 'border-green-500'
      }`}
    >
      <div
        data-testid={'circle-button'}
        onClick={() => !shouldDisabled && onClick(variant)}
        className={`wizard-heading-circle ${
          shouldDisabled ? 'border-gray-300' : 'border-green-500 active'
        }`}
      >
        {variant === ACTIVE_VARIANT.PREVIEW && (
          <ShoppingBagIcon
            className={`wizard-heading-icon ${
              shouldDisabled ? 'text-gray-300' : 'text-green-500'
            }`}
          />
        )}
        {variant === ACTIVE_VARIANT.DELIVERY && (
          <BuildingOffice2Icon
            className={`wizard-heading-icon ${
              shouldDisabled ? 'text-gray-300' : 'text-green-500'
            }`}
          />
        )}
        {variant === ACTIVE_VARIANT.RECEIPT && (
          <PencilSquareIcon
            className={`wizard-heading-icon ${
              shouldDisabled ? 'text-gray-300' : 'text-green-500'
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default WizardHeading;
