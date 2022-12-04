import { TypographyProps } from './typography.types';
import * as css from './typography.styles';

const Typography: React.FC<TypographyProps> = props => {
  return <css.Typography {...props}>{props.children}</css.Typography>;
};

export default Typography;
