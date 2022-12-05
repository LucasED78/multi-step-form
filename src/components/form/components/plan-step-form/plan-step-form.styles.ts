import styled from 'styled-components';

export const FrequencyContainer = styled.div`
  margin-top: 20px;
`;

export const PlansGrid = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 14px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 14px;
  }
`;
