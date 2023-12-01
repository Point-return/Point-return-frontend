import React, { useMemo, useState } from 'react';
import {
  Modal,
  Text,
  Table,
  withTableSorting,
  TextInput,
  Card,
  TableDataItem,
  Pagination,
  PaginationProps,
} from '@gravity-ui/uikit';
import {
  useGetDealerProductsByIdQuery,
  useGetDealersQuery,
} from '@src/services/DealerService.ts';
import MarketingProductInfo from '@components/MarketingProductInfo/MarketingProductInfo.tsx';
import './MarketingProductList.scss';
// TODO: исправить все snake_case
// TODO: сделать checkout -b от main

const columns = [
  { id: 'id', name: 'id', meta: { sort: true } },
  { id: 'product_name', name: 'Название товара', meta: { sort: true } },
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
  const MarketingProductsTable = withTableSorting(Table);
  const [searchQuery, setSearchQuery] = useState('');
  const [productItem, setProductItem] = useState<ProductData | TableDataItem>(
    {},
  );
  const [open, setOpen] = useState(false);
  const [state, setState] = React.useState({
    page: 1,
    pageSize: 10,
  });

  const { data: dealers } = useGetDealersQuery();
  // console.log(dealers);

  const { data: dealerProducts } = useGetDealerProductsByIdQuery({
    id: dealers ? dealers[1]?.id : 1,
    size: state.pageSize,
    page: state.page,
  });

  // console.log(dealerProducts);

  const [searchPosts, total] = useMemo(() => {
    const items = (dealerProducts?.items || []).filter((product: any) =>
      product.product_name.includes(searchQuery),
    );
    // TODO: исправить все snake_case
    const total = dealerProducts
      ? dealerProducts.total_page * dealerProducts.size
      : 0;

    return [items, total];
  }, [searchQuery, dealerProducts]);

  const handleClick = (item: ProductData | TableDataItem) => {
    setOpen(true);
    setProductItem(item);
  };

  const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) => {
    console.log(page, pageSize);
    setState((prevState) => ({ ...prevState, page, pageSize }));
  };

  return (
    <div className="product-list">
      <TextInput
        className="product-list__search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск по названию"
      />
      <Card type="container" className="card__element">
        <Text variant="header-2">Товары дилера</Text>
        <MarketingProductsTable
          data={searchPosts}
          columns={columns}
          onRowClick={handleClick}
        />
        <Pagination
          page={state.page}
          pageSize={state.pageSize}
          total={total}
          pageSizeOptions={[10, 50, 100]}
          onUpdate={handleUpdate}
        />
      </Card>
      <Modal open={open} onClose={() => setOpen(false)}>
        <MarketingProductInfo product={productItem} />
      </Modal>
    </div>
  );
}

export default MarketingProductList;
