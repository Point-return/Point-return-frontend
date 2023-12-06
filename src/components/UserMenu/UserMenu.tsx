import { Bars, At, ArrowRightFromSquare } from '@gravity-ui/icons';
import {
  Button,
  Card,
  DropdownMenu,
  Flex,
  Icon,
  Persona,
} from '@gravity-ui/uikit';
import { useAppDispatch, useAppSelector } from '@src/hooks/redux';
import { useLogoutUserMutation } from '@src/services/AuthService';
import { logout } from '@src/store/reducers/userSlice';

import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserMenu() {
  const navigation = useNavigate();
  const dispatch = useAppDispatch();
  const { user, loggedIn } = useAppSelector((state) => state.userReducer);
  const [logoutUser] = useLogoutUserMutation();

  console.log(user);

  const userName = user?.username as string;

  return loggedIn ? (
    <Card type="action">
      <Flex>
        <Persona type="person" text={userName} hasBorder={false} />
        <DropdownMenu
          switcher={
            <Button view="flat">
              <Icon size={16} data={Bars} />
            </Button>
          }
          items={[
            {
              icon: <Icon size={16} data={At} />,
              action: () => console.log('Rename'),
              text: `${user?.email}`,
              disabled: true,
            },
            {
              icon: <Icon size={16} data={ArrowRightFromSquare} />,
              action: async () => {
                await logoutUser();
                navigation('/login', { replace: true });
                dispatch(logout());
              },
              text: 'Выйти',
              theme: 'danger',
            },
          ]}
        />
      </Flex>
    </Card>
  ) : (
    <></>
  );
}

export default UserMenu;
