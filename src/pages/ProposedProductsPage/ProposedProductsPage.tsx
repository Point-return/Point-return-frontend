import React from 'react';
import { Flex } from '@gravity-ui/uikit';
/* import Spinner from '@components/Spinner/Spinner.tsx'; */
import Product from '@components/Product/Product.tsx';
/* import ProposedProducts from '@components/ProposedProducts/ProposedProducts.tsx'; */
import './ProposedProductPage.scss';

const ProposedProductsPage = () => {
  return (
    <div className="proposed-product">
      <Flex direction="column">
        <Product />
      </Flex>
    </div>
  );
};

export default ProposedProductsPage;
