import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 3rem;
`;

export const Category = styled.div`
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: bold;
  padding: ${({ theme }) => theme.spacings.small};
  margin-top: 10px;

  span {
    text-transform: capitalize;
  }
`;

export const AllPostsLink = styled.span`
  display: block;
  text-align: center;
  margin: ${({ theme }) => theme.spacings.large} 0;
`;
