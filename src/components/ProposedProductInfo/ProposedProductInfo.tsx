import React from 'react';
import { Card, TableDataItem, Text } from '@gravity-ui/uikit';
import { ProductItem } from '@components/ProposedProducts/ProposedProducts.tsx';
import './ProposedProductInfo.scss';

type ProposedProductInfo = {
  product: ProductItem | TableDataItem;
  index: number | null;
};

const ProposedProductInfo: React.FC<ProposedProductInfo> = (props) => {
  return (
    <Card className="card" type="container" size="l">
      <Text variant="header-1">{props.product.productName}</Text>;
    </Card>
  );
};

export default ProposedProductInfo;
