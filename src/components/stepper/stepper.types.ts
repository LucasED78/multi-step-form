export interface StepperProps {
  step: number;
  steps: string[];
  variant?: 'vertical' | 'horizontal';
  onStepClick?: (step: number) => void;
}
