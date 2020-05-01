import React from 'react';

import { Wrapper } from './styles';

const A = (props) => {
  const { children, href = '#', color = 'logo' } = props;
  return (
    <Wrapper
      rel="noopener noreferrer"
      href={href}
      target="_blank"
      color={color}
    >
      {children}
    </Wrapper>
  );
};

export default A;
