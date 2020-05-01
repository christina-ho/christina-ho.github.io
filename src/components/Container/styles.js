import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: ${({ maxWidth = 960 }) => maxWidth}px;
  margin: 0 auto;
  padding: 25px;
  @media (min-width: ${({ theme }) => theme.display.tablet}px) {
    padding: 25px 50px;
  }
`;
