import { Plan } from '../../typing';

export interface IPlanContext {
  plan?: Plan;
  setPlan: (plan?: Plan) => void;
}
