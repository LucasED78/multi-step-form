import { IconIds, IconProps } from './icon.types';
import Advanced from './icons/advanced';
import Arcade from './icons/arcade';
import Check from './icons/check';
import Pro from './icons/pro';
import Thanks from './icons/thanks';

const icons: Record<IconIds, () => JSX.Element> = {
  advanced: Advanced,
  arcade: Arcade,
  pro: Pro,
  check: Check,
  thanks: Thanks,
};

const Icon: React.FC<IconProps> = ({ iconId }) => {
  const IconFound = icons[iconId];

  return <IconFound />;
};

export default Icon;
