import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  padding: 16px;

  background-color: ${({ theme }) => theme.colors.alabaster};
  border-radius: 6px;
`;
