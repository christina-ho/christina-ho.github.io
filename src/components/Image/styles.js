import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  ${({ width, height, src, borderRadius, opacity }) => css`
    width: ${width && width};
    height: ${height && height};
    border-radius: ${borderRadius && borderRadius};
    background-image: url("${src}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: ${opacity && opacity};
    border-radius: 5px;
  `};
`;

export const ImgWrapper = styled.img`
  ${({ width, height }) => css`
    width: ${width && width};
    height: ${height && height};
  `}
`;
