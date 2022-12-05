import styled from 'styled-components';

export const Checkbox = styled.div<{ checked?: boolean }>`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;

  background-color: ${({ theme, checked = false }) =>
    checked ? theme.colors.purplishBlue : theme.colors.white};

  border: 1px solid
    ${({ theme, checked = false }) =>
      checked ? 'transparent' : theme.colors.coolGray};
  border-radius: 4px;
`;

export const Label = styled.label`
  input {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 100px;

  @media screen and (max-width: 768px) {
    gap: 0px;
  }
`;

export const TrailingContainer = styled.div`
  align-self: center;
`;
