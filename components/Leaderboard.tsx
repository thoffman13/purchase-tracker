import getLeaderboard from '@/app/actions/getLeaderboard';
import LeaderboardItem from './LeaderboardItem';
import { addCommas } from '@/lib/utils';
import { LeadingUser } from '@/types/LeadingUser';

const Leaderboard = async () => {
  const { leadingUsers, error } = await getLeaderboard();

  if (error) {
    return <p className='error'>{error}</p>;
  }

  return (
    <>
      <h4>Leaderboard</h4>
      <ul className='list'>
        {leadingUsers &&
          leadingUsers.map((user: LeadingUser) => (
            <LeaderboardItem key={user.userId} user={user} />
          ))}
      </ul>
    </>
  );
};

export default Leaderboard;