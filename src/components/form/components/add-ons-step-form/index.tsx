import { useFormikContext } from 'formik';
import { useStepperContext } from '../../../../context/stepper-context';
import { getAbbreviatedFrequency } from '../../../../helpers';
import {
  EFeature,
  EPlanFrequency,
  ESubscriptionSteps,
  features,
  featuresDescription,
} from '../../../../types';
import { ISubscriptionForm } from '../../../../typing';
import Button from '../../../button';
import CheckableCard from '../../../checkable-card';
import FormWrapper from '../form-wrapper';
import * as FormStyles from '../../styles';
import * as css from './add-ons-step-form-styles';

const AddOnsStepForm = () => {
  const { setFieldValue, values } = useFormikContext<ISubscriptionForm>();
  const { step, setStep } = useStepperContext();
  const featuresKeys = Object.keys(features);

  const handleCheckboxChange = (key: EFeature) => {
    if (values.features?.includes(key)) {
      return setFieldValue(
        'features',
        values.features.filter(feature => feature !== key),
      );
    }

    setFieldValue('features', [...(values.features ?? []), key]);
  };

  return (
    <FormWrapper
      title="Pick add-ons"
      subtitle="Add-ons helps enhance your gaming experience"
    >
      <css.ContentContainer>
        {featuresKeys.map(key => (
          <CheckableCard
            key={key}
            title={key}
            subtitle={featuresDescription[key as EFeature]}
            checkboxProps={{
              name: key.toString(),
              checked: values.features?.includes(key),
              onChange: _ => handleCheckboxChange(key as EFeature),
            }}
            trailing={
              <>{`+$${
                features[key as EFeature][values.frequency as EPlanFrequency]
              }/${getAbbreviatedFrequency(
                values.frequency as EPlanFrequency,
              )}`}</>
            }
          />
        ))}

        <FormStyles.ButtonContainer>
          <Button variant="ghost" onClick={() => setStep(step - 1)}>
            Go back
          </Button>
          <Button onClick={() => setStep(ESubscriptionSteps.Summary)}>
            Next step
          </Button>
        </FormStyles.ButtonContainer>
      </css.ContentContainer>
    </FormWrapper>
  );
};

export default AddOnsStepForm;
