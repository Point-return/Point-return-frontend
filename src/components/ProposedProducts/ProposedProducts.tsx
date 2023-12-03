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
import ProposedProductInfo from '@components/ProposedProductInfo/ProposedProductInfo.tsx';
import { CircleInfo } from '@gravity-ui/icons';
import { Check } from '@gravity-ui/icons';
import './ProposedProducts.scss';
import { useGetProposedProductsQuery } from '@src/services/ProposedService';
import Spinner from '../Spinner/Spinner';

export type ProductItem = {
  id: string;
  item: string;
  accuracy: string;
};

const ProposedProductsTable = withTableActions(Table);

const columns = [
  { id: 'id', name: 'id' },
  { id: 'levenshteinDistance', name: 'Точность' },
  { id: 'productName', name: 'Товар производителя' },
];

interface ProposedProducts {
  dealerPriceId: number;
}

const ProposedProducts: React.FC<ProposedProducts> = ({ dealerPriceId }) => {
  const [open, setOpen] = React.useState(false);
  const [index, setIndex] = React.useState<number | null>(null);
  const [productItem, setProductItem] = React.useState<
    ProductItem | TableDataItem
  >({});

  const { data, isLoading, isError } = useGetProposedProductsQuery({
    dealerPriceId,
  });

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

  //Temporary solution
  const getProposedTable = () => {
    if (!isLoading && !isError) {
      return (
        <ProposedProductsTable
          data={data}
          columns={columns}
          getRowActions={getRowActions}
          onRowClick={handleClick}
        />
      );
    } else {
      return <Text>Рекомендательная модель выбрана</Text>;
    }
  };

  return (
    <Container className="proposed-products">
      <Card className="proposed-products__card">
        <Flex direction="column">
          <Text variant="header-1">Рекомендательная система</Text>
          {isLoading && <Spinner />}
          {getProposedTable()}
        </Flex>
      </Card>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ProposedProductInfo product={productItem} index={index} />
      </Modal>
    </Container>
  );
};

export default ProposedProducts;
