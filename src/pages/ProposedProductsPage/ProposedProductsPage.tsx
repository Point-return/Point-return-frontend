import React from 'react';
import { Container, Flex } from '@gravity-ui/uikit';
import Spinner from '@components/Spinner/Spinner.tsx';
import Product from '@components/Product/Product.tsx';
import ProposedProducts from '@components/ProposedProducts/ProposedProducts.tsx';
import './ProposedProductPage.scss';

const ProposedProductsPage = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Container className="proposed-product">
      <Flex direction="column" space="10">
        <Product />
        {!loading && <ProposedProducts />}
        {loading && <Spinner />}
      </Flex>
    </Container>
  );
};

export default ProposedProductsPage;
