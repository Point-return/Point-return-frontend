import React, { FC } from 'react';
import { Card, Text, TableDataItem, Flex } from '@gravity-ui/uikit';
import { DealerProduct } from '@src/services/models.ts';
import { useGetManufacturerProductByKeyQuery } from '@src/services/ManufacturerService.ts';
import './MarketingProductInfo.scss';

type MarketingProductInfo = {
  item: DealerProduct | TableDataItem;
};

const MarketingProductInfo: FC<MarketingProductInfo> = ({ item }) => {
  const { data: product } = useGetManufacturerProductByKeyQuery({
    productKey: item.productKey,
  });

  return (
    <Card className="card" type="container" size="l">
      {product && (
        <Flex direction="column" space={3}>
          <Text variant="header-2">Товар производителя: </Text>
          <Text variant="header-1">{product?.name || '-'}</Text>
          <Flex direction="column" space={2}>
            <Text variant="body-2">Id: {product?.id || '-'}</Text>
            <Text variant="body-2">Артикль: {product?.article || '-'}</Text>
            <Text variant="body-2">{`Цена: ${product?.cost || '-'}р.`}</Text>
          </Flex>
        </Flex>
      )}
      {!product && (
        <Flex direction="column" space={2}>
          <Text variant="subheader-3">Товар еще не выбран</Text>
        </Flex>
      )}
    </Card>
  );
};

export default MarketingProductInfo;
