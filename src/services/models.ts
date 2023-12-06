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

export interface IUser {
  id: number;
  email: string;
  username: string;
}
