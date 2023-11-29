import React from 'react';
import { Container, Text } from '@gravity-ui/uikit';
import NavTab from '../NavTab/NavTab';
import './Header.scss';

function Header() {
  return (
    <Container className="header">
      <Text variant="display-1">PROSEPT</Text>
      <NavTab />
    </Container>
  );
}

export default Header;
