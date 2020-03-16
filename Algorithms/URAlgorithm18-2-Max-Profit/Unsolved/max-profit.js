// Write a function that takes an array of integers representing the price of a stock on different days. Return the maximum profit that can be made from buying and selling a single stock

var maxProfit = function(prices) {
  let profitsArr = [];
  for (let i = 0; i < prices.length; i++) {
    for (let j = prices.length - 1; j > i; j--) {
      if (prices[i] < prices[j]) {
        profitsArr.push(prices[j] - prices[i]);
      }
    }
  }
  if (profitsArr.length >= 1) {
    return Math.max(...profitsArr);
  } else {
    return 0;
  }
};
