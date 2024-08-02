export interface Transaction {
  id: string;
  text: string;
  quantity: number;
  price: number;
  userId: string;
  createdAt: Date;
}