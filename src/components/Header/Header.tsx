import React from 'react';
import './Header.scss';
import NavTab from '../NavTab/NavTab';
import { Container, Text, Button, Icon } from '@gravity-ui/uikit';
import { useAppDispatch, useAppSelector } from '@src/hooks/redux';
import { toggleTheme } from '@src/store/reducers/themeSlice';
import { Sun, Moon } from '@gravity-ui/icons';

function Header() {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.themeReducer);

  return (
    <Container className="header">
      <Text variant="display-1">PROSEPT</Text>
      <NavTab />
      <Button onClick={() => dispatch(toggleTheme())}>
        {theme ? <Icon data={Sun} /> : <Icon data={Moon} />}
      </Button>
    </Container>
  );
}

export default Header;
