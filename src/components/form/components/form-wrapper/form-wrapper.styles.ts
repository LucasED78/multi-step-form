import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 20px;

  @media screen and (max-width: 768px) {
    padding: 0;
    min-height: unset;

    & > h1 {
      margin-top: 0;
    }
  }
`;
