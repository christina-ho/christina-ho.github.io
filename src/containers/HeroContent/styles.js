import styled from 'styled-components';

export const ContentWrapper = styled.div`
  margin-top: 100px;
  max-width: 750px;
  & > p {
    margin-bottom: 25px;
  }
  @media (min-width: ${({ theme }) => theme.display.tablet}px) {
    margin-top: 220px;
  }
`;

export const AWrapper = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  :hover {
    color: ${({ theme }) => theme.colors.logo};
    transition: color 0.2s;
  }
`;
