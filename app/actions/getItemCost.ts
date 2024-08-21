'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

async function getItemCost(): Promise<{
  totalPurchases?: number;
  totalCosts?: number;
  totalVolume?: number;
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const transactions = await db.transaction.findMany({
      where: { userId },
    });

    const purchases = transactions.map((transaction) => transaction.quantity);
    const totalPurchases = purchases.reduce((acc, item) => (acc += item), 0);

    const costs = transactions.map((transaction) => transaction.price);
    const totalCosts = costs.reduce((acc, item) => (acc += item), 0);

    const volume = transactions.map((transaction) => {
      if(transaction.measurementUnit === 'oz') {
        return (transaction.volume * transaction.quantity) / 128;
      } else if (transaction.measurementUnit === 'ml') {
        return (transaction.volume * transaction.quantity) / 3785.41178;
      } else if (transaction.measurementUnit === 'L') {
        return (transaction.volume * transaction.quantity) / 3.78541178;
      } else {
        return 0;
      }
    });

    const totalVolume = volume.reduce((acc, item) => (acc += item), 0);
    
    
    //oz -> gallon 1/128 ml -> gallon = 1/3785.41178 L -> gallon = 1 / 3.78541178
    

    return { totalPurchases, totalCosts, totalVolume };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getItemCost;