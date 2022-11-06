import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.medium};
    text-align: center;
  `}

  .addHover {
    color: ${({ theme }) => theme.colors.white};
  }
`;
