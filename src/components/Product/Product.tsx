import React from 'react';
import {
  Card,
  Container,
  Flex,
  Link,
  Text,
  Button,
  Radio,
} from '@gravity-ui/uikit';
import './Product.scss';
import { useLocation } from 'react-router';
import { useGetDealersQuery } from '@src/services/DealerService';
import ProposedProducts from '@components/ProposedProducts/ProposedProducts.tsx';
import { DealerProduct } from '@src/services/models';
import { useNavigate } from 'react-router-dom';
import { useSkipProductMutation } from '@src/services/RecommendationsService.ts';

const Product: React.FC = () => {
  const navigate = useNavigate();
  const [isOpenRecommendations, setIsOpenRecommendations] =
    React.useState<boolean>(false);
  const [responseLength, setResponseLength] = React.useState(10);
  const location = useLocation();
  const item = location.state;
  const product = item as DealerProduct;

  const { data: dealers } = useGetDealersQuery();

  const [skipProduct] = useSkipProductMutation();

  const getDealerName = (): string | undefined => {
    const dealer = dealers?.filter(
      (dealer) => dealer.id == product.dealerId,
    )[0];
    return dealer?.name;
  };

  const handleSkipClick = () => {
    try {
      skipProduct({ dealerId: product.id });
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="product__container">
      <Flex direction="column" alignItems="center" space={3}>
        <Card
          className="product__card"
          view="raised"
          type="container"
          theme="info"
        >
          <Flex direction="column" space={2}>
            <Text variant="header-1">Продавeц: {getDealerName()}</Text>
            <Text variant="header-1">Товар: {product.productName}</Text>
            <Text variant="body-1">
              <Link href={product.productUrl} target="_blank">
                URL продукта
              </Link>
            </Text>
            <Button view="outlined-danger" size="l" onClick={handleSkipClick}>
              Не найдено
            </Button>
          </Flex>
        </Card>
        <Flex>
          {!isOpenRecommendations && (
            <Card className="product__card">
              <Flex direction="column" alignItems="center" space={4}>
                <Card className="product__radio">
                  <Flex space={4} direction="column" alignItems="center">
                    <Text> Количество рекомендаций </Text>
                    <Flex space={4}>
                      <Radio
                        value="option 1"
                        size="l"
                        content="3"
                        checked={responseLength == 3}
                        onChange={() => setResponseLength(3)}
                      />
                      <Radio
                        value="option 1"
                        size="l"
                        content="5"
                        checked={responseLength == 5}
                        onChange={() => setResponseLength(5)}
                      />
                      <Radio
                        value="option 1"
                        size="l"
                        content="10"
                        checked={responseLength == 10}
                        onChange={() => setResponseLength(10)}
                      />
                    </Flex>
                  </Flex>
                </Card>
                <Button
                  view="outlined-action"
                  size="xl"
                  onClick={() => setIsOpenRecommendations(true)}
                >
                  Запуск рекомендательной системы
                </Button>
              </Flex>
            </Card>
          )}
        </Flex>
        {isOpenRecommendations && (
          <ProposedProducts dealerPriceId={product.id} limit={responseLength} />
        )}
      </Flex>
    </Container>
  );
};

export default Product;
