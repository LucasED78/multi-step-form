import Card from '../card';
import Typography from '../typography';
import { CheckableCardProps } from './checkable-card.types';
import * as css from './checkable-card.styles';
import Icon from '../icon';

const CheckableCard: React.FC<CheckableCardProps> = ({
  title,
  subtitle,
  trailing,
  checkboxProps,
}) => {
  return (
    <css.Label>
      <Card
        variant="horizontal"
        leading={
          <>
            <input type="checkbox" {...checkboxProps} />
            <css.Checkbox checked={checkboxProps?.checked}>
              <Icon iconId="check" />
            </css.Checkbox>
          </>
        }
        selected={checkboxProps?.checked}
      >
        <css.ContentContainer>
          <div>
            <Typography size="XS" lineHeight="MD">
              {title}
            </Typography>
            <Typography size="XS" color="coolGray">
              {subtitle}
            </Typography>
          </div>
          {trailing !== null && (
            <css.TrailingContainer>
              <Typography size="XS" color="purplishBlue" fontWeight="400">
                {trailing}
              </Typography>
            </css.TrailingContainer>
          )}
        </css.ContentContainer>
      </Card>
    </css.Label>
  );
};

export default CheckableCard;
