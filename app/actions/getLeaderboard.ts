'use server';
import { db } from '@/lib/db';
import { auth } from '@clerk/nextjs/server';
import { LeadingUser } from '@/types/LeadingUser';

async function getLeaderboard(): Promise<{
  leadingUsers?: LeadingUser[];
  error?: string;
}> {
  const { userId } = auth();

  if (!userId) {
    return { error: 'User not found' };
  }

  try {
    const purchases = await db.transaction.groupBy({
      by: ['userId'],
      _sum: {
        price: true,
        quantity: true,
      },
      orderBy: {
        _sum: {
            price: 'desc'
        },
      },
      take: 3,
    });

    const users = await db.user.findMany({
        where: {
            clerkUserId: {
                in: purchases.map((p) => p.userId),
            },
        },
        select: {
            userName: true,
            clerkUserId: true
        },
    });

    const leadingUsers = purchases.map((p) => {
        const user = users.find((u) => u.clerkUserId === p.userId);
        return {
            userId: p.userId,
            userName: user?.userName ?? '',
            totalSpent: p._sum.price,
            totalPurchased: p._sum.quantity,
        };
    });

    return { leadingUsers };
  } catch (error) {
    return { error: 'Database error'};
  }
}

export default getLeaderboard;