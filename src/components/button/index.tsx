import * as css from './button.styles';
import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <css.Button {...props}>{children}</css.Button>;
};

export default Button;
