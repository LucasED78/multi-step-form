import Toggle from '../toggle';
import { ToggleProps } from '../toggle/toggle.types';
import Typography from '../typography';
import * as css from './plan-frequency-switcher.styles';

const PlanFrequencySwitcher: React.FC<ToggleProps> = ({ active, ...props }) => {
  return (
    <css.Container>
      <Typography size="SM" color={!active ? 'marineBlue' : 'coolGray'}>
        Monthly
      </Typography>
      <Toggle active={active} {...props} />
      <Typography size="SM" color={active ? 'marineBlue' : 'coolGray'}>
        Yearly
      </Typography>
    </css.Container>
  );
};

export default PlanFrequencySwitcher;
