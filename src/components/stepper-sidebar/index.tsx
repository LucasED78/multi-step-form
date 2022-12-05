import Stepper from '../stepper';
import { StepperProps } from '../stepper/stepper.types';
import * as css from './stepper-sidebar.styles';

const StepperSidebar: React.FC<StepperProps> = props => {
  return (
    <css.StepperWrapper>
      <Stepper {...props} />
    </css.StepperWrapper>
  );
};

export default StepperSidebar;
