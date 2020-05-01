import React from 'react';

import Text from 'components/Text';

import { Wrapper } from './styles';

const Detail = ({ label, content }) => (
  <Wrapper>
    <Text type="boldBody">{label}</Text>
    <Text color="gray">{content}</Text>
  </Wrapper>
);

export default Detail;
