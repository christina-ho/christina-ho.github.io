import React from 'react';

import { Wrapper, EndMarker } from './styles';

const Hero = (props) => {
  const { children, markerColor } = props;
  return (
    <Wrapper>
      {children}
      <EndMarker color={markerColor} />
    </Wrapper>
  );
};

export default Hero;
