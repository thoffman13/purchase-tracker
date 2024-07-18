'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

async function getItemCost(): Promise<{
  totalPurchases?: number;
  totalCosts?: number;
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

    return { totalPurchases, totalCosts };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getItemCost;