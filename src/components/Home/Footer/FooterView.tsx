import React from 'react';

import {
  Footer as FooterStyle,
  Container,
  Button,
  Divider,
  Copyright,
  Author,
} from './FooterStyle';

const Footer: React.FC = () => (
  <FooterStyle>
    <Container>
      <Button
        as="a"
        href="https://github.com/AdrianOrlow/links"
        target="_blank"
      >
        Source code
      </Button>
      <Divider />
      <Copyright>
        Made by&nbsp;
        <Author href="https://orlow.me" target="_blank">Adrian Orłów</Author>
      </Copyright>
    </Container>
  </FooterStyle>
);

export default Footer;
