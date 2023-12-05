import React from 'react';
import Product from '@components/Product/Product.tsx';
import { Container } from '@gravity-ui/uikit';
import './ProposedProductPage.scss';

const ProposedProductsPage = () => {
  return (
    <Container className="proposed-product">
      <Product />
    </Container>
  );
};

export default ProposedProductsPage;
