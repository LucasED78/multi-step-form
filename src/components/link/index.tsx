import { LinkProps } from './link.types';
import * as css from './link.styles';

const Link: React.FC<LinkProps> = props => {
  return (
    <css.Link {...props} as="a">
      {props.children}
    </css.Link>
  );
};

export default Link;
