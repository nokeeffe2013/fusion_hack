import Card from "./card";

class Game {
    constructor(listOfCards1, listOfCards2) {
        this.listOfCards1 = listOfCards1;
        this.listOfCards2 = listOfCards2;
    }

    compareStat(statName, indexOfTeam1, indexOfTeam2) {
        card1 = this.listOfCards1[0];
        card2 = this.listOfCards2[0];

        if (card1[statName] > card2[statName]) {
            console.log("Greater");
        } else if (card1[statName] < card2[statName]) {
            console.log("Less than");
        } else {
            console.log("Pick another card");
        }
    }
}

export default Game;