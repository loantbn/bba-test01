let playerName = "Mario";
let currentLives = 3;
const coins  = { level1: 25, level2: 30, level3: 40 };
let sum = 0;

function calculateTotalCoins(coins) {
   for (let key in coins) {
     sum += coins[key];
   }
 return sum;
}
sum = calculateTotalCoins(coins);

function calculateAverageCoins(sum, coins) {
  return sum / Object.keys(coins).length;
}
const averageCoins = calculateAverageCoins(sum, coins);
 
function getRemainingCoins(sum) {
  return sum % 3;
}
const remainingCoins = getRemainingCoins(sum);

console.log(`Player: ${playerName}, Lives: ${currentLives}, Total Coins: ${sum}`);  
console.log(`Average Coins: ${averageCoins}`);
console.log(`Remaining Coins: ${remainingCoins}`);
