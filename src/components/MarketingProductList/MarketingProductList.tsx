import React, { useMemo, useState } from 'react';
import './MarketingProductList.scss';
import { Table, withTableSorting, TextInput } from '@gravity-ui/uikit';

const data = [
  {
    id: 1,
    name: 'Bath Acid Plus 0,75 л',
    cost: 176,
    minPrice: 176,
    recommendedPrice: 176,
    ozonName: 'Bath Acid Plus 0,75 л',
    wbName: 'Bath Acid Plus 0,75 л',
  },
  {
    id: 2,
    name: 'Cooky Grill Gel 500 мл',
    cost: 176,
    minPrice: 176,
    recommendedPrice: 176,
    ozonName: 'Cooky Grill Gel 500 мл',
    wbName: 'Cooky Grill Gel 500 мл',
  },
  {
    id: 3,
    name: 'Bath Acid Plus 0,75 л',
    cost: 176,
    minPrice: 176,
    recommendedPrice: 176,
    ozonName: 'Bath Acid Plus 0,75 л',
    wbName: 'Bath Acid Plus 0,75 л',
  },
  {
    id: 4,
    name: 'Cooky Grill Gel 500 мл',
    cost: 176,
    minPrice: 176,
    recommendedPrice: 176,
    ozonName: 'Cooky Grill Gel 500 мл',
    wbName: 'Cooky Grill Gel 500 мл',
  },
  {
    id: 5,
    name: 'Bath Acid Plus 0,75 л',
    cost: 176,
    minPrice: 176,
    recommendedPrice: 176,
    ozonName: 'Bath Acid Plus 0,75 л',
    wbName: 'Bath Acid Plus 0,75 л',
  },
];

function MarketingProductList() {
  const MyTable = withTableSorting(Table);
  const [searchQuery, setSearchQuery] = useState('');

  const columns = [
    { id: 'id', name: '', meta: { sort: true } },
    { id: 'name', name: 'Название', meta: { sort: true } },
    { id: 'cost', name: 'Цена', meta: { sort: true } },
    {
      id: 'recommendedPrice',
      name: 'Рекомендованная цена',
      meta: { sort: true },
    },
    { id: 'ozonName', name: 'Название OZON', meta: { sort: true } },
    { id: 'wbName', name: 'Название WB', meta: { sort: true } },
  ];

  const searchPosts = useMemo(() => {
    return data.filter((post) => post.name.includes(searchQuery));
  }, [searchQuery]);

  return (
    <div className="prouct-list">
      <TextInput
        className="prouct-list__search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск"
      />
      <MyTable
        className="prouct-list__table"
        data={searchPosts}
        columns={columns}
      />
    </div>
  );
}

export default MarketingProductList;
