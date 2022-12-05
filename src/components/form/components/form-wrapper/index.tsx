import FormHeading from '../form-heading';
import * as css from './form-wrapper.styles';
import { FormWrapperProps } from './form-wrapper.types';

const FormWrapper: React.FC<FormWrapperProps> = ({ children, ...props }) => {
  return (
    <css.Container>
      <FormHeading {...props} />

      {children}
    </css.Container>
  );
};

export default FormWrapper;
