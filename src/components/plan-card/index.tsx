import Card from '../card';
import Typography from '../typography';
import { PlanCardProps } from './plan-card.types';

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  subtitle,
  highlightText,
  ...props
}) => {
  return (
    <Card {...props}>
      <div>
        <Typography size="SM" color="marineBlue" fontWeight="700">
          {title}
        </Typography>

        {subtitle !== null && (
          <Typography
            size="XS"
            color="coolGray"
            fontWeight="400"
            lineHeight="XL"
          >
            {subtitle}
          </Typography>
        )}

        {highlightText !== null && (
          <Typography size="XXS" color="marineBlue">
            {highlightText}
          </Typography>
        )}
      </div>
    </Card>
  );
};

export default PlanCard;
