import React from 'react';
import { Card, Container, Spin } from '@gravity-ui/uikit';
import './Spinner.scss';

const Spinner = () => {
  return (
    <Container maxWidth="l">
      <Card className="card" type="container" size="l">
        <Spin size="xl" />
      </Card>
    </Container>
  );
};

export default Spinner;
