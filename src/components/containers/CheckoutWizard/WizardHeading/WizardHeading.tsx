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
  const isDisabled: boolean = !disabled && active === variant;

  return (
    <div
      className={`wizard-heading ${
        isDisabled ? 'border-green-500' : 'border-gray-300'
      }`}
    >
      <div
        data-testid={'circle-button'}
        onClick={() => !disabled && onClick(variant)}
        className={`wizard-heading-circle ${
          isDisabled ? 'border-green-500 active' : 'border-gray-300'
        }`}
      >
        {variant === ACTIVE_VARIANT.PREVIEW && (
          <ShoppingBagIcon
            className={`wizard-heading-icon ${
              isDisabled ? 'text-green-500' : 'text-gray-300'
            }`}
          />
        )}
        {variant === ACTIVE_VARIANT.DELIVERY && (
          <BuildingOffice2Icon
            className={`wizard-heading-icon ${
              isDisabled ? 'text-green-500' : 'text-gray-300'
            }`}
          />
        )}
        {variant === ACTIVE_VARIANT.RECEIPT && (
          <PencilSquareIcon
            className={`wizard-heading-icon ${
              isDisabled ? 'text-green-500' : 'text-gray-300'
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default WizardHeading;
