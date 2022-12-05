import React, { useState } from 'react';
import { Plan } from '../../typing';
import { IPlanContext } from './plan-context.types';

const PlanContext = React.createContext<IPlanContext>({
  setPlan: () => null,
});

export const usePlanContext = () => React.useContext(PlanContext);

export const PlanContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [plan, setPlan] = useState<Plan | undefined>();

  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
};
