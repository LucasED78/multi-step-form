import { useFormikContext } from 'formik';
import { useMemo } from 'react';
import { useStepperContext } from '../../../../context/stepper-context';
import { ESubscriptionSteps } from '../../../../types';
import { ISubscriptionForm } from '../../../../typing';
import Button from '../../../button';
import Input from '../../../input';
import FormWrapper from '../form-wrapper';
import * as css from '../../styles';

const PersonalInfoStepForm = () => {
  const { values, errors, touched, dirty, handleChange, handleBlur } =
    useFormikContext<ISubscriptionForm>();
  const { setStep } = useStepperContext();
  const keys = ['name', 'emailAddress', 'phoneNumber'];

  const isValid = useMemo(() => {
    return !keys.some(
      key => !!errors[key as keyof ISubscriptionForm] || !dirty,
    );
  }, [touched, errors]);

  return (
    <FormWrapper
      title="Personal info"
      subtitle="Please provide your name, email address, and phone number"
    >
      <css.FormContentContainer>
        <css.InputGroup>
          <Input
            label="Name"
            name="name"
            placeholder="Provide your name"
            value={values.name}
            hasError={touched.name && !!errors.name}
            helperText={errors.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            label="Email Address"
            name="emailAddress"
            placeholder="Your best email address"
            value={values.emailAddress}
            hasError={touched.emailAddress && !!errors.emailAddress}
            helperText={errors.emailAddress}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <Input
            label="Phone Number"
            name="phoneNumber"
            placeholder="e.g. +1 234 567 890"
            value={values.phoneNumber}
            hasError={touched.phoneNumber && !!errors.phoneNumber}
            helperText={errors.phoneNumber}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </css.InputGroup>
        <css.ButtonContainer>
          <Button
            onClick={() => setStep(ESubscriptionSteps.PlanSelector)}
            disabled={!isValid}
          >
            Next step
          </Button>
        </css.ButtonContainer>
      </css.FormContentContainer>
    </FormWrapper>
  );
};

export default PersonalInfoStepForm;
