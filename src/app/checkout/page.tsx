import { Metadata } from 'next';
import { FC } from 'react';
import CheckoutWizard from '@/components/containers/CheckoutWizard';

export interface ICheckoutPageProps {}

export const metadata: Metadata = {
  title: 'Checkout',
};

const CheckoutPage: FC<ICheckoutPageProps> = ({}) => {
  return (
    <section>
      <CheckoutWizard />
    </section>
  );
};

export default CheckoutPage;
