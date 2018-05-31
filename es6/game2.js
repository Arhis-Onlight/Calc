// Return a random number from m to n
function rand (m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

// It returns the string that is randomly represented as one of six of the face of the crown of the anchor.
function randFace () {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][rand(0, 5)];
}

let funds = 50; // initial conditions
let round = 0;

while (funds > 1 && funds < 100) {
    round++;
    console.log(`Round: ${round}`);
    console.log(`\tstarting funds: ${funds}`);
    // Betting all
    let bets = { crown: 0, anchor: 0, heart: 0, spade: 0, club: 0, diamond: 0 };
    let totalBet = rand(1, funds);
    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        // Distribution of all bets
        let remaining = totalBet;
        do {
            let bet = rand(1, remaining);
            let face = randFace();
            bets[face] = bets[face] + bet;
            remaining = remaining - bet;
        } while (remaining > 0);
    }
    funds = funds - totalBet;
    console.log('\tbets: ' +
    Object.keys(bets).map(face => `${face} : ${bets[face]} : pense `).join(', ') +
    `(total: ${totalBet} pence)`);

    // cast of the bones
    const hand = [];
    for (let roll = 0; roll < 3; roll++) {
        hand.push(randFace());
    }
    console.log(`\thand: ${hand.join(', ')}`);

    // Getting win
    let winnings = 0;
    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    console.log(`\twinnings: ${winnings}`);
}
console.log(`Tending funds: ${funds}`);
