import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from 'components/Text';

import { Wrapper } from './styles';

const Copyright = (props) => {
  const { name = 'First Last' } = props;
  const year = new Date().getFullYear();
  return (
    <Wrapper>
      <Text type="subscript" color="gray">
        Copyright <FontAwesomeIcon icon="copyright" /> {name} {year}
      </Text>
    </Wrapper>
  );
};

export default Copyright;
