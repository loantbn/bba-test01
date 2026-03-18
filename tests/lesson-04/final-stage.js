function findPairsDivisibleBy17() {
   let total = 0;
   for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
         if ((i + j) % 17 === 0) {
            console.log(`Pair: (${i}, ${j})`);
            total++;
         }
      }
   }
   console.log(`\nTotal pairs: ${total}`);
}
findPairsDivisibleBy17();