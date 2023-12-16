'use client';

import { FC, useState } from 'react';

import WizardContent from './WizardContent/WizardContent';
import WizardHeading from './WizardHeading/WizardHeading';
import Widget from '@/components/containers/Widget';

export enum ACTIVE_VARIANT {
  PREVIEW = 1,
  DELIVERY = 2,
  RECEIPT = 3,
}

export interface ICheckoutWizardProps {}

const CheckoutWizard: FC<ICheckoutWizardProps> = () => {
  const [activeTab, setActiveTab] = useState<ACTIVE_VARIANT>(
    ACTIVE_VARIANT.PREVIEW,
  );

  return (
    <Widget
      title={'Check out'}
      className="w-full checkout-container min-h-full space-y-4"
    >
      <div className="tab-heading h-12 flex justify-center items-center">
        <WizardHeading
          variant={ACTIVE_VARIANT.PREVIEW}
          onClick={setActiveTab}
          active={activeTab}
        />
        <WizardHeading
          variant={ACTIVE_VARIANT.DELIVERY}
          onClick={setActiveTab}
          active={activeTab}
        />
        <WizardHeading
          variant={ACTIVE_VARIANT.RECEIPT}
          onClick={setActiveTab}
          active={activeTab}
        />
      </div>
      <div className="tab-content h-full flex">
        <WizardContent isActive={activeTab === 1}>
          <h3>{'// Add preview info'}</h3>
        </WizardContent>
        <WizardContent isActive={activeTab === 2}>
          <h3>{'// Add delivery info'}</h3>
        </WizardContent>
        <WizardContent isActive={activeTab === 3}>
          <h3>{'// Add receipt info'}</h3>
        </WizardContent>
      </div>
    </Widget>
  );
};

export default CheckoutWizard;
