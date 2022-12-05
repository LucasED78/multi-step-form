import * as css from './wrapper.styles';
import { WrapperProps } from './wrapper.types';

const Wrapper: React.FC<WrapperProps> = ({ sidebarComponent, children }) => {
  return (
    <css.Container>
      <css.Wrapper>
        {sidebarComponent}
        <css.ContentWrapper>{children}</css.ContentWrapper>
      </css.Wrapper>
    </css.Container>
  );
};

export default Wrapper;
