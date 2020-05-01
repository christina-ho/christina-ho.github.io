import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Text from 'components/Text';

import { Wrapper, WrapperItem, IconWrapper } from './styles';

const Header = (props) => {
  const { left, links } = props;
  const right = links.map((item) => {
    const { icon, word, link = '#' } = item;
    const email = link.substring(link.length - 3) === 'com' && `mailto:${link}`;
    return (
      <IconWrapper
        key={icon || word}
        rel="noopener noreferrer"
        target="_blank"
        href={email || link}
      >
        {icon && <FontAwesomeIcon icon={icon} size="lg" />}
        {word && (
          <Text type="nav" color="gray">
            {word}
          </Text>
        )}
      </IconWrapper>
    );
  });
  return (
    <Wrapper>
      <WrapperItem>{left && left}</WrapperItem>
      <WrapperItem>{right}</WrapperItem>
    </Wrapper>
  );
};

export default Header;
