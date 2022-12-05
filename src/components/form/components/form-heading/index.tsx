import Typography from '../../../typography';
import { FormHeadingProps } from './form-heading.types';

const FormHeading: React.FC<FormHeadingProps> = ({ title, subtitle }) => {
  return (
    <>
      <Typography color="marineBlue" size="XL" fontWeight="700" as="h1">
        {title}
      </Typography>

      {subtitle != null && (
        <Typography size="XS" color="coolGray" lineHeight="MD">
          {subtitle}
        </Typography>
      )}
    </>
  );
};

export default FormHeading;
