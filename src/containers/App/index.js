import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.min.css';

import Container from 'components/Container';
import Copyright from 'components/Copyright';

import HeroContent from '../HeroContent';
import Projects from '../Projects';

import projects from './projects';

library.add(fab, fas);

const App = () => (
  <Container maxWidth={1200}>
    <HeroContent />
    <Projects projects={projects} />
    <Copyright name="Christina Ho" />
  </Container>
);

export default App;
