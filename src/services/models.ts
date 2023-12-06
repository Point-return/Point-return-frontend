export type Dealer = {
  id: number;
  name: string;
};

export type DealersResponse = Dealer[];

export type DealerProduct = {
  date: Date;
  dealerId: number;
  id: number;
  price: number;
  productKey: string;
  productName: string;
  productUrl: string;
};

export type DealerProductsByIdResponse = {
  items: DealerProduct[];
  page: number;
  size: number;
  totalPage: number;
};

export type DealerProductsByIdRequest = {
  id: number;
  size: number;
  page: number;
};

export type StatisticResponse = {
  QuantitySkipped: number;
  QuantitySuccessfull: number;
  percent: string;
};

export type StatisticRequest = {
  dealerId: number;
};

export type chooseProductRequest = {
  dealerId: number;
  productId: number | unknown;
};

export type skipProductRequest = {
  dealerId: number;
};

export interface IUser {
  id: number;
  email: string;
  username: string;
}

export type getManufacturerProductByKeyRequest = {
  article: string;
  categoryId: number;
  cost: number;
  ean13: string;
  id: number;
  name: string;
  name1c: string;
  ozonArticle: string;
  ozonName: string;
  recomendedPrice: string;
  wbArticle: string;
  wbArticleTd: string;
  wbName: string;
  ymArticle: string;
};

export type getManufacturerProductByKeyResponse = {
  productKey: number;
};
