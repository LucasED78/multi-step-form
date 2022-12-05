import { useFormikContext } from 'formik';
import { usePlanContext } from '../../../../context/plan-context';
import { useStepperContext } from '../../../../context/stepper-context';
import {
  formatCurrencyWithFrequency,
  getAbbreviatedFrequency,
  getValueWithFeatures,
} from '../../../../helpers';
import {
  EFeature,
  EPlanFrequency,
  ESubscriptionSteps,
  features,
} from '../../../../types';
import { ISubscriptionForm } from '../../../../typing';
import Button from '../../../button';
import Summary from '../../../summary-card';
import Typography from '../../../typography';
import FormWrapper from '../form-wrapper';
import * as FormStyles from '../../styles';
import * as css from './summary-step.styles';

const SummaryStepForm = () => {
  const { values } = useFormikContext<ISubscriptionForm>();
  const { step, setStep } = useStepperContext();
  const { plan } = usePlanContext();

  return (
    <FormWrapper
      title="Personal info"
      subtitle="Please provide your name, email address, and phone number"
    >
      <FormStyles.FormContentContainer>
        <Summary
          title={plan?.name ?? ''}
          value={formatCurrencyWithFrequency(
            (plan?.pricing[values.frequency]?.unit_amount ?? 0) / 100,
            values.frequency as EPlanFrequency,
          )}
          additionalFeatures={(values.features ?? []).map(feature => ({
            title: feature,
            value: `+$${
              features[feature as EFeature][values.frequency as EPlanFrequency]
            }/${getAbbreviatedFrequency(values.frequency as EPlanFrequency)}`,
          }))}
          onLinkClick={() => setStep(ESubscriptionSteps.PlanSelector)}
        />

        <css.Totalizer>
          <Typography size="XS" color="coolGray">
            Total (per{' '}
            {values.frequency === EPlanFrequency.Monthly ? 'month' : 'year'})
          </Typography>

          <Typography size="SM" color="purplishBlue" fontWeight="700">
            +
            {getValueWithFeatures(
              plan?.pricing[values.frequency]?.unit_amount ?? 0,
              values.features as EFeature[],
              values.frequency,
            )}
          </Typography>
        </css.Totalizer>

        <FormStyles.ButtonContainer>
          <Button variant="ghost" onClick={() => setStep(step - 1)}>
            Go back
          </Button>

          <Button onClick={() => setStep(ESubscriptionSteps.Confirmation)}>
            Confirm
          </Button>
        </FormStyles.ButtonContainer>
      </FormStyles.FormContentContainer>
    </FormWrapper>
  );
};

export default SummaryStepForm;
