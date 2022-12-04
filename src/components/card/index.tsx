import { CardProps } from './card.types';
import * as css from './card.styles';

const Card: React.FC<CardProps> = ({ leading, children, ...props }) => {
  return (
    <css.CardContainer {...props}>
      {leading != null && leading}
      {children}
    </css.CardContainer>
  );
};

export default Card;
