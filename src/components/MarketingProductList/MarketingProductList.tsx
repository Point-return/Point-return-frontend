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
import './MarketingProductList.scss';
import { useNavigate } from 'react-router-dom';

const columns = [
  { id: 'id', name: 'id', meta: { sort: true } },
  {
    id: 'product_name',
    name: 'Название товара',
    meta: { sort: true },
    width: '80%',
  },
  {
    id: 'manufacturer_name',
    name: 'Товар производителя',
    meta: { sort: true },
    align: 'center' as const,
  },
  { id: 'cost', name: 'Цена', meta: { sort: true } },
  { id: 'date', name: 'Дата', meta: { sort: true } },
];

export type ProductData = {
  id: number;
  product_name: string;
  cost: number;
  manufacturer_name: string;
  date: Date;
};

function MarketingProductList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeId, setActiveId] = useState(0);
  const [dealerId, setDealerId] = useState(1);
  const [state, setState] = React.useState({
    page: 1,
    pageSize: 10,
  });
  const navigate = useNavigate();
  const MarketingProductsTable = withTableSorting(Table);

  const { data: dealers } = useGetDealersQuery();
  const { data: dealerProducts } = useGetDealerProductsByIdQuery({
    id: dealerId,
    size: state.pageSize,
    page: state.page,
  });

  const [searchPosts, total] = useMemo(() => {
    const items = (dealerProducts?.items || []).filter((product: any) =>
      product.product_name.includes(searchQuery),
    );
    // TODO: исправить все snake_case. После бэка.
    const total = dealerProducts
      ? dealerProducts.total_page * dealerProducts.size
      : 0;

    return [items, total];
  }, [searchQuery, dealerProducts]);

  const handleClick = (item: ProductData | TableDataItem) => {
    navigate(`/dealer-product/${item.id}`);
  };

  const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) => {
    setState((prevState) => ({ ...prevState, page, pageSize }));
  };

  return (
    <div className="product-list">
      <Flex justifyContent="center" space={4}>
        <Flex direction="column" space={5}>
          <Text variant="header-2">Дилеры: </Text>
          <Card type="container">
            <Menu size="l">
              {dealers?.map((dealer) => (
                <Menu.Item
                  key={dealer.id}
                  active={activeId === dealer?.id}
                  onClick={() => {
                    setActiveId(dealer?.id);
                    setDealerId(dealer?.id);
                    setState((prevState) => ({
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
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию"
            />
          </Flex>
          <Card type="container" className="card__element">
            <Flex direction="column" space={5}>
              <Pagination
                className="card__pagination"
                page={state.page}
                pageSize={state.pageSize}
                total={total}
                pageSizeOptions={[10, 50, 100]}
                onUpdate={handleUpdate}
              />
              <MarketingProductsTable
                data={searchPosts}
                columns={columns}
                onRowClick={handleClick}
              />
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </div>
  );
}

export default MarketingProductList;
