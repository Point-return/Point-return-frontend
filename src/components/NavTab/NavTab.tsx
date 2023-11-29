import { Card, Button } from '@gravity-ui/uikit';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavTab.scss';

function NavTab() {
  const location = useLocation();

  return (
    <Card className="navtab" view="clear">
      <Link to="/" className="navtab__link">
        <Button selected={location.pathname === '/' && true}>Главная</Button>
      </Link>
      <Link to="/proposed-products" className="navtab__link">
        <Button selected={location.pathname === '/proposed-products' && true}>
          Сопоставление товара
        </Button>
      </Link>
    </Card>
  );
}

export default NavTab;
