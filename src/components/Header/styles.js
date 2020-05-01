import styled from 'styled-components';

const time = 0.2;

export const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-content: center;
`;

export const WrapperItem = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.a`
  text-decoration: none;
  margin-left: 25px;
  display: inline-block;
  color: ${({ theme }) => theme.colors.gray};
  :hover {
    color: ${({ theme }) => theme.colors.logo};
    transition: color ${time}s;
    & > p {
      border: ${({ theme }) => `1px solid ${theme.colors.logo}`};
      background: ${({ theme }) => `${theme.colors.logo}`};
      color: ${({ theme }) => theme.colors.white};
      transition: border ${time}s, background ${time}s, color ${time}s;
    }
  }
`;
