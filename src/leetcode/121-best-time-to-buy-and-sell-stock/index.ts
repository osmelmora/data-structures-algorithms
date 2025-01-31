export function maxProfit(prices: number[]): number {
  let profit = 0;
  let buyIndex = 0;
  let sellIndex = 1;

  for (; sellIndex < prices.length; sellIndex++) {
    if (prices[sellIndex] > prices[buyIndex]) {
      profit = Math.max(profit, prices[sellIndex] - prices[buyIndex]);
    } else {
      buyIndex = sellIndex;
    }
  }

  return profit;
}
