import React from 'react';
import { Card, Container, Flex, Link, Text } from '@gravity-ui/uikit';
import {
  mockMarketingDealer,
  mockMarketingDealerprice,
  mockMarketingProductdealerkey,
} from '@src/pages/ProposedProductsPage/mockData.ts';
import './Product.scss';

const getDealerName = (productId: number) => {
  const product = mockMarketingProductdealerkey.filter((item) => {
    return item.key === productId;
  })[0];
  return mockMarketingDealer.filter(
    (dealer) => dealer.id == product.dealerId,
  )[0];
};

const Product: React.FC = () => {
  const product = mockMarketingDealerprice[0];
  const dealer = getDealerName(product.productKey);

  return (
    <Container maxWidth="l">
      <Flex direction="column" space="5">
        <Card
          className="card__element"
          view="raised"
          type="container"
          theme="info"
          size="l"
        >
          <Flex direction="row" space="5">
            <Flex direction="column" space="5">
              <Flex space="5">
                <Text variant="header-1">Продавeц:</Text>
              </Flex>
              <Flex
                space="8"
                style={{
                  padding: '5px',
                }}
              >
                <Text variant="header-1">Товар:</Text>
              </Flex>
            </Flex>
            <Flex direction="column" space="5">
              <Flex
                space="5"
                style={{
                  padding: '5px',
                }}
              >
                <Text variant="header-2">{dealer.name}</Text>
              </Flex>
              <Flex
                space="5"
                style={{
                  padding: '5px',
                }}
              >
                <Text variant="header-2">{product.productName}</Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            space="5"
            style={{
              padding: '5px',
            }}
          >
            <Text variant="body-1">
              <Link href={product.productUrl} target="_blank">
                URL продукта
              </Link>
            </Text>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
};

export default Product;
