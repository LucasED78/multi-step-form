import { useState } from 'react';
import Toggle from '../toggle';
import Typography from '../typography';
import * as css from './plan-frequency-switcher.styles';

const PlanFrequencySwitcher = () => {
  const [active, setActive] = useState(false);

  return (
    <css.Container>
      <Typography size="SM" color={!active ? 'marineBlue' : 'coolGray'}>
        Monthly
      </Typography>
      <Toggle active={active} onClick={() => setActive(!active)} />
      <Typography size="SM" color={active ? 'marineBlue' : 'coolGray'}>
        Yearly
      </Typography>
    </css.Container>
  );
};

export default PlanFrequencySwitcher;
