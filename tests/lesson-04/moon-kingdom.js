//Bai 1

function createCharacters() {

   const characters = [
      { name: "Luna", level: 5, health: 1000 },
      { name: "An", level: 10, health: 200 },
      { name: "Binh", level: 20, health: 400 }
   ];

   const charactersPowerUp = characters.map(c => ({
      name: c.name.toUpperCase(),
      level: c.level * 2,
      health: c.health * 3
   }));

   const possibleWinners =
      charactersPowerUp.filter(c => c.health > 1000);

   console.log(charactersPowerUp);
   console.log(possibleWinners);
}

createCharacters();

//Bai 2
   const players = [
      { name: "Mario", score: 1000 },
      { name: "Luigi", score: 900 },
      { name: "Peach", score: 850 },
      { name: "Yoshi", score: 800 },
      { name: "Phong", score: 500 }
   ];
function printLeaderboard(players) {
   players.sort((a, b) => b.score - a.score);
   for (let i = 0; i < players.length; i++) {
    let medal = "";
    if (i === 0) medal = "🥇";
    else if (i === 1) medal = "🥈";
    else if (i === 2) medal = "🥉";
    console.log(`${medal} ${players[i].name}: ${players[i].score}`);
   }
}
printLeaderboard(players);