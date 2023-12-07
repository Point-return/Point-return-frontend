import React from 'react';
import './NavTab.scss';
import { Card, Button } from '@gravity-ui/uikit';
import { Link } from 'react-router-dom';

function NavTab() {
  return (
    <Card className="navtab" view="clear">
      <Link to="/" className="navtab__link">
        <Button>Главная</Button>
      </Link>
    </Card>
  );
}

export default NavTab;
