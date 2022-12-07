import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  max-width: 100%;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    position: relative;
  }
`;

export const Wrapper = styled.div`
  width: 890px;
  height: 540px;

  display: flex;

  padding: 20px;

  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    width: 100vw;
    min-height: 100vh;

    flex-direction: column;

    padding: 0;

    background-color: ${({ theme }) => theme.colors.alabaster};

    margin-bottom: 40px;
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  padding: 0 80px;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex: 0;
    z-index: 1;

    padding: 20px;
    margin: 0 16px;
    margin-top: 100px;

    border-radius: 10px;

    background-color: ${({ theme }) => theme.colors.white};
  }
`;
