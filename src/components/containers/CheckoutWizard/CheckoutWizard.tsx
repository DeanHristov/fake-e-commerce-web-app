'use client';

import { FC, useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import WizardContent from './WizardContent/WizardContent';
import WizardHeading from './WizardHeading/WizardHeading';
import Widget from '@/components/containers/Widget';
import Receipt from '@/components/ui/Receipt';
import { useSelector } from '@/store';
import { selectShoppingCart } from '@/store/slices';
import { Utils } from '@/utils/Utils';
import Button from '@/components/ui/Button';
import { ICart } from '@/types';

export enum ACTIVE_VARIANT {
  PREVIEW = 1,
  RECEIPT = 3,
}

export interface ICheckoutWizardProps {}

// TODO Add step history to make possible the user go back through the steps
const CheckoutWizard: FC<ICheckoutWizardProps> = () => {
  // const dispatch = useDispatch();
  const shoppingCart: ICart = useSelector(selectShoppingCart);
  const shouldDisable: boolean = Utils.isEmpty(shoppingCart.products);
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
          disabled={shouldDisable}
          variant={ACTIVE_VARIANT.RECEIPT}
          onClick={setActiveTab}
          active={activeTab}
        />
      </div>
      <div className="tab-content h-full flex">
        <WizardContent isActive={activeTab === 1}>
          <h3 className="text-center">
            {"Imagine you've entered your card data!"}
          </h3>
          <Button
            disabled={shouldDisable}
            onClick={() => setActiveTab(ACTIVE_VARIANT.RECEIPT)}
            rightIcon={<ArrowRightIcon className="w-8 h-8" />}
            title={'Pay & Go'}
            className="mt-10"
          />
        </WizardContent>

        <WizardContent isActive={activeTab === 3}>
          <div className="max-w-xs h-auto mx-auto shadow-md">
            <Receipt
              currency={shoppingCart.currency || 'EUR'}
              total={shoppingCart.discountedTotal}
              products={Object.values(shoppingCart.products)}
            />
          </div>
        </WizardContent>
      </div>
    </Widget>
  );
};

export default CheckoutWizard;
