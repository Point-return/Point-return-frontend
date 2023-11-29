import React, { FC } from 'react';
import { Card, Text, TableDataItem, Flex } from '@gravity-ui/uikit';
import { ProductData } from '@components/MarketingProductList/MarketingProductList';

type MarketingProductInfo = {
  product: ProductData | TableDataItem;
};

const MarketingProductInfo: FC<MarketingProductInfo> = ({ product }) => {
  console.log(product.name);
  return (
    <Card
      type="container"
      size="l"
      style={{ width: '1200px', height: '600px' }}
    >
      <Flex direction="column">
        <Text variant="subheader-3">{product.name}</Text>
        <Flex>
          <Text variant="body-2">Цена: {product.cost}</Text>
          <Text variant="body-2">
            Рекомендованная цена: {product.recommendedPrice}
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
};

export default MarketingProductInfo;
