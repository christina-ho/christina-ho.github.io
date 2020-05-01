import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 0;
`;

export const ListWrapper = styled.div`
  margin: 40px 0;
`;

export const ListItem = styled.div`
  margin-bottom: 50px;
  & > :first-child {
    cursor: pointer;
    font-size: 30px;
    :hover {
      color: ${({ theme }) => theme.colors.logo};
      transition: color 0.5s;
    }
    @media (min-width: ${({ theme }) => theme.display.tablet}px) {
      font-size: 40px;
    }
  }
`;

export const CollapseContent = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.display.desktop}px) {
    flex-direction: row;
  }
`;

export const CollapseItem = styled.div`
  margin-bottom: 10px;
  @media (min-width: ${({ theme }) => theme.display.desktop}px) {
    width: 48%;
  }
`;
