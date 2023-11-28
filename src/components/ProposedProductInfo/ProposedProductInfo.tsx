import React from 'react';
import { Card, TableDataItem, Text } from '@gravity-ui/uikit';
import { ProductItem } from '@components/ProposedProducts/ProposedProducts.tsx';

type ProposedProductInfo = {
  product: ProductItem | TableDataItem;
  index: number | null;
};

const ProposedProductInfo: React.FC<ProposedProductInfo> = (props) => {
  console.log(props.product);
  console.log(props.index);
  return (
    <Card
      style={{
        width: '100%',
        padding: '15px',
      }}
      type="container"
      size="l"
    >
      <Text variant="header-1">{props.product.item}</Text>;
    </Card>
  );
};

export default ProposedProductInfo;
