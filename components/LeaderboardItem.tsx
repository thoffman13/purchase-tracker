'use client';
import { LeadingUser } from '@/types/LeadingUser';
import { addCommas } from '@/lib/utils';

const LeaderboardItem = ({ user }: { user: LeadingUser }) => {

  return (
    <li className="leaderboard">
      {user.userName}
      <span>
        {addCommas(Number(user.totalPurchased?.toFixed(0)))}
      </span>
      <span>
        ${addCommas(Number(user.totalSpent?.toFixed(2)))}
      </span>
    </li>
  );
};

export default LeaderboardItem;