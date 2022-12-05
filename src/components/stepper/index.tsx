import { StepperProps } from './stepper.types';
import * as css from './stepper.styles';
import Typography from '../typography';

const Stepper: React.FC<StepperProps> = ({
  step: selectedStep,
  onStepClick,
  steps,
  variant = 'vertical',
}) => {
  return (
    <css.StepperContainer variant={variant}>
      {steps.map((value, index) => {
        const step = index + 1;

        return (
          <css.StepItemContainer
            key={step}
            onClick={() => (onStepClick ? onStepClick(step) : null)}
          >
            <css.StepContainer selected={selectedStep === step}>
              {step}
            </css.StepContainer>

            {variant === 'vertical' && (
              <span>
                <Typography size="XXS" color="lightGray" lineHeight="MD">
                  {`STEP ${step}`}
                </Typography>

                {
                  <Typography size="XS" color="white">
                    {value.toUpperCase()}
                  </Typography>
                }
              </span>
            )}
          </css.StepItemContainer>
        );
      })}
    </css.StepperContainer>
  );
};

export default Stepper;
