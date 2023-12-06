import React from 'react';
import './Header.scss';
import NavTab from '../NavTab/NavTab';
import { Container, Text, Button, Icon, Flex } from '@gravity-ui/uikit';
import { useAppDispatch, useAppSelector } from '@src/hooks/redux';
import { toggleTheme } from '@src/store/reducers/themeSlice';
import { Sun, Moon } from '@gravity-ui/icons';
import UserMenu from '../UserMenu/UserMenu';

function Header() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.userReducer);
  const { theme } = useAppSelector((state) => state.themeReducer);

  return (
    <Container className="header">
      <Text variant="display-1">PROSEPT</Text>
      {user && <NavTab />}
      <Flex space={2}>
        <UserMenu />
        <Button onClick={() => dispatch(toggleTheme())}>
          {theme ? <Icon data={Sun} /> : <Icon data={Moon} />}
        </Button>
      </Flex>
    </Container>
  );
}

export default Header;
