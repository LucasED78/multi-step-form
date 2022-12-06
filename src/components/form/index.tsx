import { Formik } from 'formik';
import { useMemo } from 'react';
import { useStepperContext } from '../../context/stepper-context';
import { EPlanFrequency, ESubscriptionSteps } from '../../types';
import AddOnsStepForm from './components/add-ons-step-form';
import ConfirmationStep from './components/confirmation-step';
import PersonalInfoStepForm from './components/personal-info-step-form';
import PlanStepForm from './components/plan-step-form';
import SummaryStepForm from './components/summary-step';
import schema from './schema';

const Form = () => {
  const { step } = useStepperContext();

  const Component = useMemo(() => {
    switch (step) {
      case ESubscriptionSteps.PersonalInfo:
        return <PersonalInfoStepForm />;
      case ESubscriptionSteps.PlanSelector:
        return <PlanStepForm />;
      case ESubscriptionSteps.FeaturesPicker:
        return <AddOnsStepForm />;
      case ESubscriptionSteps.Summary:
        return <SummaryStepForm />;
      case ESubscriptionSteps.Confirmation:
        return <ConfirmationStep />;
    }
  }, [step]);

  return (
    <Formik
      initialValues={{
        frequency: EPlanFrequency.Monthly,
        features: [],
      }}
      isInitialValid={false}
      validationSchema={schema}
      onSubmit={console.log}
    >
      {Component}
    </Formik>
  );
};

export default Form;
