import React, { useState } from 'react';
import { IStepperContext } from './stepper-context.types';

const StepperContext = React.createContext<IStepperContext>({
  step: 1,
  setStep: () => null,
});

export const useStepperContext = () => React.useContext(StepperContext);

export const StepperContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [step, setStep] = useState(1);

  return (
    <StepperContext.Provider
      value={{
        step,
        setStep,
      }}
    >
      {children}
    </StepperContext.Provider>
  );
};
