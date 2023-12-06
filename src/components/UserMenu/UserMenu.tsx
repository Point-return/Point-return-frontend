import { Bars, At, ArrowRightFromSquare } from '@gravity-ui/icons';
import {
  Button,
  Card,
  DropdownMenu,
  Flex,
  Icon,
  Persona,
} from '@gravity-ui/uikit';
import { useAppSelector } from '@src/hooks/redux';
import { useLogoutUserMutation } from '@src/services/AuthService';

import React from 'react';
import { useNavigate } from 'react-router-dom';

function UserMenu() {
  const navigation = useNavigate();
  const { user } = useAppSelector((state) => state.userReducer);
  const [logoutUser] = useLogoutUserMutation();

  const userName = user?.username as string;

  return user ? (
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
              action: () => {
                logoutUser();
                navigation('/login');
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
