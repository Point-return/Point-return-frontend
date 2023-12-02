import React from 'react';
import './NavTab.scss';
import { Card, Button } from '@gravity-ui/uikit';
import { Link, useLocation } from 'react-router-dom';

function NavTab() {
  const location = useLocation();

  return (
    <Card className="navtab" view="clear">
      <Link to="/" className="navtab__link">
        <Button selected={location.pathname === '/' && true}>Главная</Button>
      </Link>
    </Card>
  );
}

export default NavTab;
