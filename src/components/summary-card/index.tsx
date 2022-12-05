import Link from '../link';
import Typography from '../typography';
import * as css from './summary-card.styles';
import { SummaryProps } from './summary-card.types';

const Summary: React.FC<SummaryProps> = ({
  title,
  value,
  onLinkClick,
  additionalFeatures,
}) => {
  return (
    <css.Container>
      <css.SelectedPlanContainer>
        <span>
          <Typography
            color="marineBlue"
            lineHeight="MD"
            fontWeight="700"
            size="XS"
          >
            {title}
          </Typography>

          <Link href="#" color="coolGray" size="XS" onClick={onLinkClick}>
            Change
          </Link>
        </span>
        <Typography color="marineBlue" fontWeight="700" size="XS">
          {value}
        </Typography>
      </css.SelectedPlanContainer>

      {additionalFeatures.length > 0 && (
        <>
          <css.Divider />

          <css.FeaturesContainer>
            {additionalFeatures.map(({ title, value }, index) => (
              <css.FeatureContentContainer key={index}>
                <Typography color="coolGray" size="XS">
                  {title}
                </Typography>

                <Typography color="marineBlue" size="XS">
                  {value}
                </Typography>
              </css.FeatureContentContainer>
            ))}
          </css.FeaturesContainer>
        </>
      )}
    </css.Container>
  );
};

export default Summary;
