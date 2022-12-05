import Skeleton from 'react-loading-skeleton';
import Card from '../card';
import Typography from '../typography';
import { PlanCardProps } from './plan-card.types';
import 'react-loading-skeleton/dist/skeleton.css';
import { useMediaQuery } from 'react-responsive';

const PlanCard: React.FC<PlanCardProps> = ({
  title,
  subtitle,
  highlightText,
  loading,
  ...props
}) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });

  if (loading)
    return (
      <Skeleton
        width={isMobile ? '100%' : '128px'}
        height={isMobile ? '70px' : '128px'}
      />
    );

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
