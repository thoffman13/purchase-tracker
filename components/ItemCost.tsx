import getItemCost from '@/app/actions/getItemCost';
import { addCommas } from '@/lib/utils';

const ItemCost = async () => {
  const { totalPurchases, totalCosts } = await getItemCost();

  return (
    <div className='item-cost-container'>
      <div>
        <h4>Total Purchased</h4>
        <p className='purchase plus'>{addCommas(Number(totalPurchases?.toFixed(0)))}</p>
      </div>
      <div>
        <h4>Total <br /> Cost</h4>
        <p className='purchase cost'>${addCommas(Number(totalCosts?.toFixed(2)))}</p>
      </div>
    </div>
  );
};

export default ItemCost;