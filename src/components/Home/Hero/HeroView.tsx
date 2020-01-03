import React from 'react';
import NewLink from 'components/Home/Hero/NewLink';

import {
  Section, Container,
} from './HeroStyle';

const Hero: React.FC = () => (
  <Section>
    <Container>
      <NewLink />
    </Container>
  </Section>
);

export default Hero;
