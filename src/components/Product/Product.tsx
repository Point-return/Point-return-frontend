import React from 'react';
import { Card, Container, Flex, Link, Text } from '@gravity-ui/uikit';
import './Product.scss';
import { useLocation } from 'react-router';
import { useGetDealersQuery } from '@src/services/DealerService';
import ProposedProducts from '../ProposedProducts/ProposedProducts';
import { DealerProduct } from '@src/services/models';

const Product: React.FC = () => {
  const location = useLocation();
  const item = location.state;
  const product = item as DealerProduct;

  const { data: dealers } = useGetDealersQuery();

  const getDealerName = (): string | undefined => {
    const dealer = dealers?.filter(
      (dealer) => dealer.id == product.dealerId,
    )[0];
    return dealer?.name;
  };

  return (
    <Container className="product__container">
      <Flex direction="column" alignItems="center">
        <Card
          className="product__card"
          view="raised"
          type="container"
          theme="info"
        >
          <Flex direction="column">
            <Text variant="header-1">Продавeц: {getDealerName()}</Text>
            <Text variant="header-1">Товар: {product.productName}</Text>
            <Text variant="body-1">
              <Link href={product.productUrl} target="_blank">
                URL продукта
              </Link>
            </Text>
          </Flex>
        </Card>
        <ProposedProducts dealerPriceId={product.id} />
      </Flex>
    </Container>
  );
};

export default Product;
