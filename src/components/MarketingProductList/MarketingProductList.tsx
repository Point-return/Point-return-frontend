import React, { useMemo, useState, FC } from 'react';
import './MarketingProductList.scss';
import {
  Table,
  withTableSorting,
  TableDataItem,
  TextInput,
  Text,
  Modal,
  Card,
} from '@gravity-ui/uikit';
import MarketingProductInfo from '../MarketingProductInfo/MarketingProductInfo';

export interface ProductData {
  id: number;
  article: string;
  ean13: number;
  name: string;
  cost: number;
  recommendedPrice: number;
  categoryId: number;
  ozonName: string;
  name1c: string;
  wbName: string;
  ozonArticle: number;
  wbArticle: number;
  ymArticle: string;
  wbArticle_td: number;
  date: Date;
}

const data = [
  {
    id: 114,
    article: '125-5',
    ean13: 4680008141842.0,
    name: 'Средство для удаления технических масел, смазочных материалов и нефтепродуктовDuty Oil концентрат 1:20-1:150 /  5 л',
    cost: 711.82,
    recommendedPrice: 1663.0,
    categoryId: 35.0,
    ozonName:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    name1c:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    wbName:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    ozonArticle: 189522869.0,
    wbArticle: 149992148.0,
    ymArticle: '125-5',
    wbArticle_td: null,
    date: '2023-11-24',
  },
  {
    id: 114,
    article: 125 - 5,
    ean13: 4680008141842.0,
    name: 'Средство для удаления технических масел, смазочных материалов и нефтепродуктовDuty Oil концентрат 1:20-1:150 /  5 л',
    cost: 711.82,
    recommendedPrice: 1663.0,
    categoryId: 35.0,
    ozonName:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    name1c:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    wbName:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    ozonArticle: 189522869.0,
    wbArticle: 149992148.0,
    ymArticle: 125 - 5,
    wbArticle_td: null,
    date: '2023-11-25',
  },
  {
    id: 114,
    article: 125 - 5,
    ean13: 4680008141842.0,
    name: 'Средство для удаления технических масел, смазочных материалов и нефтепродуктовDuty Oil концентрат 1:20-1:150 /  5 л',
    cost: 711.82,
    recommendedPrice: 1663.0,
    categoryId: 35.0,
    ozonName:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    name1c:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    wbName:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    ozonArticle: 189522869.0,
    wbArticle: 149992148.0,
    ymArticle: 125 - 5,
    wbArticle_td: null,
    date: '2023-11-26',
  },
  {
    id: 114,
    article: 125 - 5,
    ean13: 4680008141842.0,
    name: 'Средство для удаления технических масел, смазочных материалов и нефтепродуктовDuty Oil концентрат 1:20-1:150 /  5 л',
    cost: 711.82,
    recommendedPrice: 1663.0,
    categoryId: 35.0,
    ozonName:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    name1c:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    wbName:
      'Средство для удаления технических масел, смазочных материалов и нефтепродуктов PROSEPT Duty Oil, 5 л.',
    ozonArticle: 189522869.0,
    wbArticle: 149992148.0,
    ymArticle: 125 - 5,
    wbArticle_td: null,
    date: '2023-11-27',
  },
];

const MarketingProductList: FC = () => {
  const MyTable = withTableSorting(Table);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [productItem, setProductItem] = useState<ProductData | TableDataItem>(
    {},
  );
  const [open, setOpen] = useState(false);

  const columns = [
    { id: 'id', name: 'ID', meta: { sort: true } },
    {
      id: 'name',
      name: 'Название',
      meta: { sort: true },
    },
    { id: 'cost', name: 'Цена', meta: { sort: true } },
    { id: 'date', name: 'Дата изменения', meta: { sort: true } },
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

  const handleClick = (item: ProductData | TableDataItem) => {
    setOpen(true);
    setProductItem(item);
  };

  return (
    <div className="prouct-list">
      <TextInput
        className="prouct-list__search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск"
      />
      <Card type="container" className="prouct-list__table">
        <Text variant="header-2">Товары</Text>
        <MyTable
          data={searchPosts}
          columns={columns}
          onRowClick={handleClick}
        />
      </Card>
      <Modal open={open} onClose={() => setOpen(false)}>
        <MarketingProductInfo product={productItem} />
      </Modal>
    </div>
  );
};

export default MarketingProductList;
