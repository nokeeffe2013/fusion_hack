import Card from "./card.js";

class Game {
    listOfCards1;
    listOfCards2;

    constructor(listOfCards1, listOfCards2) {
        this.listOfCards1 = listOfCards1;
        this.listOfCards2 = listOfCards2;

        console.log(this.listOfCards1);
        console.log(this.listOfCards2);
    }

    compareStat(statName, indexOfTeam1, indexOfTeam2) {
        let card1 = this.listOfCards1[0];
        let card2 = this.listOfCards2[0];

        if (card1[statName] > card2[statName]) {
            console.log("Greater");
            return 1;
        } else if (card1[statName] < card2[statName]) {
            console.log("Less than");
            return 0;
        } else {
            console.log("Pick another card");
            return -1;
        }
    }
}

export default Game;