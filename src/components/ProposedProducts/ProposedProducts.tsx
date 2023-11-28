import React from 'react';
import {
  Table,
  withTableActions,
  Container,
  Card,
  Modal,
  TableDataItem,
  Text,
  Flex,
} from '@gravity-ui/uikit';
import { mockMarketingProduct } from '@src/pages/ProposedProducts/mockData.ts';
import ProposedProductInfo from '@components/ProposedProductInfo/ProposedProductInfo.tsx';
import { CircleInfo } from '@gravity-ui/icons';
import { Check } from '@gravity-ui/icons';

export type ProductItem = {
  id: string;
  item: string;
  accuracy: string;
};

const ProposedProductsTable = withTableActions(Table);

const data: ProductItem[] = mockMarketingProduct.map((mockItem) => ({
  id: mockItem.id,
  item: mockItem.name,
  accuracy: mockItem.accuracy,
}));

const columns = [
  { id: 'id', name: 'id' },
  { id: 'accuracy', name: 'Точность' },
  { id: 'item', name: 'Товар производителя' },
];

const ProposedProducts: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState<number | null>(null);
  const [productItem, setProductItem] = React.useState<
    ProductItem | TableDataItem
  >({});

  const handleClick = (item: ProductItem | TableDataItem, index: number) => {
    console.log('Click');
    console.log(item, index);
  };

  const getRowActions = (item: ProductItem | TableDataItem, index: number) => {
    return [
      {
        icon: <CircleInfo />,
        text: 'Подробно',
        handler: () => {
          console.log(item, index);
          setProductItem(item);
          setIndex(index);
          setOpen(true);
        },
      },
      {
        icon: <Check />,
        text: 'Выбрать',
        handler: () => {
          setProductItem(item);
          setIndex(index);
        },
      },
    ];
  };

  return (
    <Container maxWidth="l">
      <Card
        style={{
          width: '100%',
          padding: '15px',
        }}
        type="container"
        size="l"
      >
        <Flex
          space="5"
          style={{
            padding: '5px',
          }}
        >
          <Text variant="header-1">Рекомендательная система</Text>
        </Flex>
        <Flex
          style={{
            padding: '5px',
          }}
        >
          <ProposedProductsTable
            data={data}
            columns={columns}
            getRowActions={getRowActions}
            onRowClick={handleClick}
          />
        </Flex>
      </Card>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ProposedProductInfo product={productItem} index={index} />
      </Modal>
    </Container>
  );
};

export default ProposedProducts;
