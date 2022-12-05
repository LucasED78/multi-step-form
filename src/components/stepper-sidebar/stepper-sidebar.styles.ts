import styled from 'styled-components';
import background from '../../assets/bg-sidebar-desktop.svg';
import backgroundMobile from '../../assets/bg-sidebar-mobile.svg';

export const StepperWrapper = styled.aside`
  display: flex;

  width: 274px;
  height: 100%;
  min-height: 80vh;

  padding: 30px;

  background: url(${background});
  background-position: bottom;

  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: unset;
    max-height: 172px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    position: absolute;
    top: 0;
    left: 0;

    background: url(${backgroundMobile});
  }
`;
