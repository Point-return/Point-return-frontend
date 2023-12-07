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
  Container,
  withTableActions,
  Modal,
} from '@gravity-ui/uikit';
import {
  useGetDealerProductsByIdQuery,
  useGetDealersQuery,
} from '@src/services/DealerService.ts';
import { Dealer, DealerProduct } from '@src/services/models.ts';
import { useNavigate } from 'react-router-dom';
import './MarketingProductList.scss';
import StatsItem from '@components/StatsItems/StatsItem.tsx';
import {
  useGetDealerStatisticQuery,
  useGetGlobalStatisticQuery,
} from '@src/services/StatisticsService';
import MarketingProductInfo from '@components/MarketingProductInfo/MarketingProductInfo.tsx';
import { useAppDispatch, useAppSelector } from '@src/hooks/redux';
import { setActiveId, setDealerId } from '@src/store/reducers/dealerSlice';
import { setPage, setPageSize } from '@src/store/reducers/pageSlice';

const columns = [
  { id: 'id', name: 'id', meta: { sort: true } },
  {
    id: 'productName',
    name: 'Название товара',
    meta: { sort: true },
    width: '90%',
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
  const [tableState, setTableState] = useState<TTableState>({
    page: 1,
    pageSize: 10,
  });
  const [isOpenProductInfo, setIsOpenProductInfo] = useState<boolean>(false);
  const [productItem, setProductItem] = useState<DealerProduct | TableDataItem>(
    {},
  );

  const dispatch = useAppDispatch();
  const { dealerId, activeId } = useAppSelector((state) => state.dealerReducer);
  const { pageNumber, pageSizeNumber } = useAppSelector(
    (state) => state.pageReducer,
  );

  const navigate = useNavigate();
  const MarketingProductsTable = withTableActions(withTableSorting(Table));

  const { data: dealers } = useGetDealersQuery();
  const { data: dealerProducts } = useGetDealerProductsByIdQuery({
    id: dealerId,
    size: pageSizeNumber,
    page: pageNumber,
  });
  const { data: GlobalStats } = useGetGlobalStatisticQuery();
  const { data: DealerStats } = useGetDealerStatisticQuery({ dealerId });

  const [searchPosts, total] = useMemo<[DealerProduct[], number]>(() => {
    const items: DealerProduct[] = (dealerProducts?.items || []).filter(
      (product: DealerProduct) => product.productName.includes(searchQuery),
    );

    const total = dealerProducts
      ? dealerProducts.totalPage * dealerProducts.size
      : 0;

    return [items, total];
  }, [searchQuery, dealerProducts]);

  const getRowActions = () => {
    return [
      {
        text: 'Посмотреть товар производителя',
        handler: handleAction,
      },
    ];
  };

  const handleAction = (item: DealerProduct | TableDataItem) => {
    setProductItem(item);
    setIsOpenProductInfo(true);
  };

  const handleRowClick = (item: DealerProduct | TableDataItem): void => {
    navigate(`/dealer-product/${item.id}`, {
      state: item,
    });
  };

  const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize): void => {
    dispatch(setPage(page));
    dispatch(setPageSize(pageSize));
    /* setTableState((prevState) => ({
      ...prevState,
      page: dispatch(setPage(page)),
      pageSize,
    })); */
  };

  return (
    <Container className="product-list">
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
                    dispatch(setDealerId(dealer?.id));
                    dispatch(setActiveId(dealer?.id));
                    setTableState((prevState: TTableState) => ({
                      ...prevState,
                      page: tableState.page,
                      pageSize: tableState.pageSize,
                    }));
                  }}
                >
                  {dealer.name}
                </Menu.Item>
              ))}
            </Menu>
          </Card>
          <Flex direction="column" space={3}>
            <StatsItem title="Общая статистика:" statistic={GlobalStats} />
            <StatsItem title="Статистика по дилеру:" statistic={DealerStats} />
          </Flex>
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
                page={pageNumber}
                pageSize={tableState.pageSize}
                total={total}
                pageSizeOptions={[10, 50, 100]}
                onUpdate={handleUpdate}
              />

              <MarketingProductsTable
                data={searchPosts}
                columns={columns}
                onRowClick={handleRowClick}
                getRowActions={getRowActions}
              />
            </Flex>
          </Card>
        </Flex>
      </Flex>
      <Modal
        open={isOpenProductInfo}
        onClose={() => setIsOpenProductInfo(false)}
      >
        <MarketingProductInfo item={productItem} />
      </Modal>
    </Container>
  );
};

export default MarketingProductList;
