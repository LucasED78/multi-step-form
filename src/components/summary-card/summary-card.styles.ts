import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 16px;

  background-color: ${({ theme }) => theme.colors.alabaster};
  border-radius: 6px;
`;

export const SelectedPlanContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;

  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FeatureContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
