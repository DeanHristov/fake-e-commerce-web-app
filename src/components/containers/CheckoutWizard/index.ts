import CheckoutWizard, {
  ACTIVE_VARIANT,
  ICheckoutWizardProps,
} from './CheckoutWizard';
import WizardHeading, {
  IWizardHeadingProps,
} from './WizardHeading/WizardHeading';
import WizardContent, {
  IWizardContentProps,
} from './WizardContent/WizardContent';

export type {
  ICheckoutWizardProps,
  IWizardHeadingProps,
  IWizardContentProps,
  ACTIVE_VARIANT,
};

export { WizardHeading, WizardContent };
export default CheckoutWizard;
