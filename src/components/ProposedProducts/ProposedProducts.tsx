import React from 'react';
import {
  Table,
  Container,
  Card,
  TableDataItem,
  Text,
  Flex,
  Button,
} from '@gravity-ui/uikit';
import './ProposedProducts.scss';
import { useGetProposedProductsQuery } from '@src/services/ProposedService';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { useChooseProductMutation } from '@src/services/RecommendationsService.ts';

export type ProductItem = {
  id: string;
  productName: string;
  accuracy: string;
};

const columns = [
  { id: 'id', name: 'id' },
  { id: 'levenshteinDistance', name: 'Точность' },
  { id: 'productName', name: 'Товар производителя', width: 770 },
];

interface ProposedProducts {
  dealerPriceId: number;
  limit: number;
}

const ProposedProducts: React.FC<ProposedProducts> = ({
  dealerPriceId,
  limit,
}) => {
  const navigate = useNavigate();
  const [chosenProduct, setChosenProduct] = React.useState<string>('');
  const [chosenProductId, setChosenProductId] = React.useState(null);

  const { data, isLoading, isError } = useGetProposedProductsQuery({
    dealerPriceId,
    limit,
  });

  const [chooseProduct] = useChooseProductMutation();

  const handleTableClick = (item: ProductItem | TableDataItem) => {
    setChosenProductId(item.id);
    setChosenProduct(item.productName);
  };

  const handleAddClick = () => {
    try {
      chooseProduct({ dealerId: dealerPriceId, productId: chosenProductId });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const getProposedTable = () => {
    if (data?.length && !isLoading && !isError) {
      return (
        <Flex direction="column" space={2}>
          <Card className="proposed-products__product">
            <Flex direction="column" space={3}>
              <Text variant="header-1">Выбранный товар:</Text>

              <Text variant="body-2">{chosenProduct}</Text>
              {chosenProduct && (
                <Flex space={3}>
                  <Button
                    view="outlined-success"
                    size="l"
                    onClick={handleAddClick}
                  >
                    Добавить
                  </Button>
                </Flex>
              )}
            </Flex>
          </Card>
          <Card className="proposed-products__card">
            <Flex direction="column">
              <Text variant="header-1">Рекомендательная система</Text>
              <Table
                data={data}
                columns={columns}
                onRowClick={handleTableClick}
              />
            </Flex>
          </Card>
        </Flex>
      );
    } else if (!isLoading) {
      return (
        <Flex direction="column" space={2} alignItems="center">
          <Text color="danger" variant="body-2">
            Рекомендации не найдены
          </Text>
        </Flex>
      );
    }
  };

  return (
    <Container className="proposed-products">
      {isLoading && <Spinner />}
      {getProposedTable()}
    </Container>
  );
};

export default ProposedProducts;
