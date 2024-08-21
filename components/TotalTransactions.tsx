import { addCommas } from '@/lib/utils';
import getRunningTotal from '@/app/actions/getRunningTotal';

const TotalTransactions = async () => {
   const { totalPurchases, totalCosts, totalVolume } = await getRunningTotal();

   return(
    <div className='totalUserPurchase'>
      <h1>Running Total</h1>
      <div className='total'>
        <div className='total1'>
            <h3>Purchased</h3>
            <h2>{addCommas(Number(totalPurchases?.toFixed(0)))}</h2>
        </div>
        
        <div className='total2'>
            <h3>Spent</h3>
            <h2>${addCommas(Number(totalCosts?.toFixed(2)))}</h2>
        </div>
        
        <div className='total3'>
            <h3>Drank</h3>
            <h2>{addCommas(Number(totalVolume?.toFixed(2)))} Gallons</h2>
        </div>
      </div>
    </div>
   ); 
}

export default TotalTransactions;