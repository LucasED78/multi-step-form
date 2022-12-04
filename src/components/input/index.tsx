import * as css from './input.styles';
import { InputProps } from './input.types';

const Input: React.FC<InputProps> = ({
  label,
  helperText,
  hasError = false,
  ...props
}) => {
  return (
    <css.InputContainer>
      <css.LabelContainer>
        <css.Label>{label} </css.Label>

        {hasError && <css.ErrorText>{helperText}</css.ErrorText>}
      </css.LabelContainer>

      <css.Input hasError={hasError} {...props} />
    </css.InputContainer>
  );
};

export default Input;
