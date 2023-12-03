import React, { useMemo, useState } from 'react';
import {
  Text,
  Table,
  withTableSorting,
  TextInput,
  Card,
  TableDataItem,
  Pagination,
  PaginationProps,
  Menu,
  Flex,
} from '@gravity-ui/uikit';
import {
  useGetDealerProductsByIdQuery,
  useGetDealersQuery,
} from '@src/services/DealerService.ts';
import { Dealer, DealerProduct } from '@src/services/models.ts';
import { useNavigate } from 'react-router-dom';
import './MarketingProductList.scss';

const columns = [
  { id: 'id', name: 'id', meta: { sort: true } },
  {
    id: 'productName',
    name: 'Название товара',
    meta: { sort: true },
    width: '80%',
  },
  {
    id: 'productKey',
    name: 'id товара производителя',
    meta: { sort: true },
    align: 'center' as const,
  },
  { id: 'price', name: 'Цена', meta: { sort: true } },
  { id: 'date', name: 'Дата', meta: { sort: true } },
];

type TTableState = {
  page: number;
  pageSize: number;
};

const MarketingProductList: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeId, setActiveId] = useState<number>(0);
  const [dealerId, setDealerId] = useState<number>(1);
  const [tableState, setTableState] = useState<TTableState>({
    page: 1,
    pageSize: 10,
  });
  const navigate = useNavigate();
  const MarketingProductsTable = withTableSorting(Table);

  const { data: dealers } = useGetDealersQuery();
  const { data: dealerProducts } = useGetDealerProductsByIdQuery({
    id: dealerId,
    size: tableState.pageSize,
    page: tableState.page,
  });

  const [searchPosts, total] = useMemo<[DealerProduct[], number]>(() => {
    const items: DealerProduct[] = (dealerProducts?.items || []).filter(
      (product: DealerProduct) => product.productName.includes(searchQuery),
    );

    const total = dealerProducts
      ? dealerProducts.totalPage * dealerProducts.size
      : 0;

    return [items, total];
  }, [searchQuery, dealerProducts]);

  const handleRowClick = (item: DealerProduct | TableDataItem): void => {
    navigate(`/dealer-product/${item.id}`, {
      state: item,
    });
  };

  const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize): void => {
    setTableState((prevState) => ({ ...prevState, page, pageSize }));
  };

  return (
    <div className="product-list">
      <Flex justifyContent="center" space={4}>
        <Flex direction="column" space={5}>
          <Text variant="header-2">Дилеры: </Text>
          <Card type="container">
            <Menu size="l">
              {dealers?.map((dealer: Dealer) => (
                <Menu.Item
                  key={dealer.id}
                  active={activeId === dealer?.id}
                  onClick={() => {
                    setActiveId(dealer?.id);
                    setDealerId(dealer?.id);
                    setTableState((prevState: TTableState) => ({
                      ...prevState,
                      page: 1,
                      pageSize: 10,
                    }));
                  }}
                >
                  {dealer.name}
                </Menu.Item>
              ))}
            </Menu>
          </Card>
        </Flex>
        <Flex
          direction="column"
          alignItems="left"
          space={5}
          justifyContent="center"
        >
          <Flex space={10}>
            <Text variant="header-2">Товары: </Text>
            <TextInput
              className="product-list__search"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Поиск по названию"
            />
          </Flex>
          <Card type="container" className="card__element">
            <Flex direction="column" space={5}>
              <Pagination
                className="card__pagination"
                page={tableState.page}
                pageSize={tableState.pageSize}
                total={total}
                pageSizeOptions={[10, 50, 100]}
                onUpdate={handleUpdate}
              />
              <MarketingProductsTable
                data={searchPosts}
                columns={columns}
                onRowClick={handleRowClick}
              />
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </div>
  );
};

export default MarketingProductList;
