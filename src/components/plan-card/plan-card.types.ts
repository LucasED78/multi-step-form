import { CardProps } from '../card/card.types';

export interface PlanCardProps extends CardProps {
  title: string;
  subtitle?: string;
  highlightText?: string;
}
