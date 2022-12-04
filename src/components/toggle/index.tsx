import * as css from './toggle.styles';
import { ToggleProps } from './toggle.types';

const Toggle: React.FC<ToggleProps> = ({ active, onClick }) => {
  console.log({ active });

  return <css.Toggle active={active} onClick={onClick} />;
};

export default Toggle;
