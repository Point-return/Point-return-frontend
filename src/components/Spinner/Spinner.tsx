import React from 'react';
import { Card, Container, Spin } from '@gravity-ui/uikit';

const Spinner = () => {
  return (
    <Container maxWidth="l">
      <Card
        style={{
          width: '100%',
          padding: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        type="container"
        size="l"
      >
        <Spin size="xl" />
      </Card>
    </Container>
  );
};

export default Spinner;
