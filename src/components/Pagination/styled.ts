import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${({ theme }) => theme.spacings.large};
`;
export const PreviousLink = styled.div``;

export const NextLink = styled.div`
  margin-left: auto;
`;
