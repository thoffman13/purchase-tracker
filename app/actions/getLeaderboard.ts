'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';

async function getLeaderboard(): Promise<{
  text?: string;
  quantity?: number;
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

    const balance = transactions.reduce(
      (sum, transaction) => sum + transaction.quantity,
      0
    );

    return { text, quantity };
  } catch (error) {
    return { error: 'Database error' };
  }
}

export default getLeaderboard;