import { useFormikContext } from 'formik';
import { useMediaQuery } from 'react-responsive';
import { usePlanContext } from '../../../../context/plan-context';
import { useStepperContext } from '../../../../context/stepper-context';
import { formatCurrencyWithFrequency } from '../../../../helpers';
import usePlans from '../../../../hooks/use-plans';
import { EPlanFrequency, ESubscriptionSteps } from '../../../../types';
import { ISubscriptionForm } from '../../../../typing';
import Button from '../../../button';
import Icon from '../../../icon';
import { IconIds } from '../../../icon/icon.types';
import PlanCard from '../../../plan-card';
import PlanFrequencySwitcher from '../../../plan-frequency-switcher';
import FormWrapper from '../form-wrapper';
import * as FormStyles from '../../styles';
import * as css from './plan-step-form.styles';

const PlanStepForm = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const { data = [], isLoading } = usePlans();
  const { setFieldValue, values } = useFormikContext<ISubscriptionForm>();
  const { step, setStep } = useStepperContext();
  const { setPlan } = usePlanContext();

  const isValid = !!values.frequency && !!values.planId;

  return (
    <FormWrapper
      title="Personal info"
      subtitle="Please provide your name, email address, and phone number"
    >
      <FormStyles.FormContentContainer>
        <css.PlansGrid>
          {data.map(plan => (
            <PlanCard
              key={plan.id}
              leading={<Icon iconId={plan.name.toLowerCase() as IconIds} />}
              title={plan.name}
              subtitle={formatCurrencyWithFrequency(
                (plan.pricing[values.frequency].unit_amount ?? 0) / 100,
                values.frequency,
              )}
              highlightText={
                values.frequency === EPlanFrequency.Monthly
                  ? undefined
                  : '2 months free'
              }
              onClick={() => {
                setFieldValue('planId', plan.id);
                setPlan(plan);
              }}
              variant={isMobile ? 'horizontal' : 'vertical'}
              selected={plan.id === values.planId}
            />
          ))}

          {isLoading &&
            Array(3)
              .fill('')
              .map((_, index) => (
                <PlanCard key={index} title="" loading={isLoading} />
              ))}
        </css.PlansGrid>

        <css.FrequencyContainer>
          <PlanFrequencySwitcher
            active={values.frequency !== EPlanFrequency.Monthly}
            onClick={() =>
              setFieldValue(
                'frequency',
                values.frequency === EPlanFrequency.Monthly
                  ? EPlanFrequency.Yearly
                  : EPlanFrequency.Monthly,
              )
            }
          />
        </css.FrequencyContainer>

        <FormStyles.ButtonContainer>
          <Button variant="ghost" onClick={() => setStep(step - 1)}>
            Go back
          </Button>
          <Button
            disabled={!isValid}
            onClick={() => setStep(ESubscriptionSteps.FeaturesPicker)}
          >
            Next step
          </Button>
        </FormStyles.ButtonContainer>
      </FormStyles.FormContentContainer>
    </FormWrapper>
  );
};

export default PlanStepForm;
