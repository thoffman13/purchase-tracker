export interface Transaction {
  id: string;
  text: string;
  quantity: number;
  price: number;
  volume: number;
  measurementUnit: string;
  userId: string;
  createdAt: Date;
}