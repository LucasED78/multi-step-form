import Icon from '../../../icon';
import Typography from '../../../typography';
import * as css from './confirmation.styles';

const ConfirmationStep = () => (
  <css.Container>
    <Icon iconId="thanks" />

    <Typography size="XL" color="marineBlue" fontWeight="700" as="h1">
      Thank you!
    </Typography>

    <Typography size="XS" color="coolGray" lineHeight="MD" textAlign="center">
      Thanks for confirming your subscription! We hope you have fun using our
      platform. If you ever need support, please feel free to email us at
      support@loremgaming.com.
    </Typography>
  </css.Container>
);

export default ConfirmationStep;
