import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  position: relative;
`;

export const EndMarker = styled.div`
  position: absolute;
  bottom: 10px;
  width: 75px;
  border: 1px solid ${({ theme, color = 'black' }) => theme.colors[color]};
`;
