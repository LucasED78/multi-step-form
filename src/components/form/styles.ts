import styled from 'styled-components';

export const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormContentContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  margin-top: 20px;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: auto;

  & > button:last-of-type {
    margin-left: auto;
  }

  @media screen and (max-width: 768px) {
    margin: unset;
    padding: 20px;
    background-color: white;

    position: fixed;
    left: 0;
    bottom: 0;
  }
`;
