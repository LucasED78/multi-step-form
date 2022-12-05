import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  min-height: 80vh;

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
