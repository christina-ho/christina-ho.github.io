import styled, { css } from 'styled-components';

const time = 0.2;

export const Wrapper = styled.a`
  text-decoration: none;
  padding: 5px 18px;
  border-radius: 5px;
  display: inline-block;
  font-weight: bold;
  ${({ theme, color }) => css`
    border: 1px solid ${theme.colors[color]};
    color: ${theme.colors[color]};
    ${theme.text.body.style};
    font-size: 15px;
    transition: border ${time}s, background ${time}s, color ${time}s;
    :hover {
      background: ${theme.colors[color]};
      border: 1px solid ${theme.colors[color]};
      color: ${theme.colors.white};
    }
  `};
`;
