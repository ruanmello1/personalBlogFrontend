import styled, { css } from 'styled-components';

export const Container = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
    margin: ${theme.spacings.medium};
    margin-top: 0;
    font-style: italic;
    display: flex;

    span {
      margin: 0 4px;
    }
  `}
`;
