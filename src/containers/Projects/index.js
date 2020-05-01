import React, { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollAnimation from 'react-animate-on-scroll';

import Text from 'components/Text';

import ProjectItem from './ProjectItem';
import { Wrapper, ListWrapper } from './styles';

const Projects = (props) => {
  const { projects = [] } = props;

  const [dropdown, setDropDown] = useState({ prev: 'unnamed' });

  useEffect(() => {
    const p = projects.reduce((result, item) => {
      const { name } = item;
      result[name] = false;
      return result;
    });
    setDropDown((state) => ({ ...state, ...p }));
  }, [projects]);

  const toggleOpen = (current) => () =>
    setDropDown((state) => ({
      ...state,
      prev: current,
      [state.prev]: false,
      [current]: !state[current],
    }));

  const list = projects.map((item) => {
    const { name } = item;
    return (
      <ScrollAnimation key={name} animateIn="fadeIn" animateOnce>
        <ProjectItem
          isOpened={dropdown[name] || false}
          toggleOpen={toggleOpen}
          {...item}
        />
      </ScrollAnimation>
    );
  });
  return (
    <Wrapper>
      <Text type="title">Projects</Text>
      <ListWrapper>{list}</ListWrapper>
    </Wrapper>
  );
};

export default Projects;
