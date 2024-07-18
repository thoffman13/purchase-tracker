import { currentUser } from '@clerk/nextjs/server';
import Guest from '@/components/Guest';
import AddTransaction from '@/components/AddTransaction';
import Leaderboard from '@/components/Leaderboard';
import ItemCost from '@/components/ItemCost';
import TransactionList from '@/components/TransactionList';

const HomePage = async () => {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <main>
      <h2>Welcome, {user.username}</h2>
      <Leaderboard />
      <ItemCost />
      <AddTransaction />
      <TransactionList />
    </main>
  );
};

export default HomePage;