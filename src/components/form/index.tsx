import { Formik } from 'formik';
import { useStepperContext } from '../../context/stepper-context';
import { EPlanFrequency, ESubscriptionSteps } from '../../types';
import AddOnsStepForm from './components/add-ons-step-form';
import PersonalInfoStepForm from './components/personal-info-step-form';
import PlanStepForm from './components/plan-step-form';
import SummaryStepForm from './components/summary-step';
import schema from './schema';

const Form = () => {
  const { step } = useStepperContext();

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
      <>
        {step === ESubscriptionSteps.PersonalInfo && <PersonalInfoStepForm />}
        {step === ESubscriptionSteps.PlanSelector && <PlanStepForm />}
        {step === ESubscriptionSteps.FeaturesPicker && <AddOnsStepForm />}
        {step === ESubscriptionSteps.Summary && <SummaryStepForm />}
      </>
    </Formik>
  );
};

export default Form;
