import Game from "./game.js";
import Card from "./card.js";

let borisCard = new Card(52, 41, 42, 42, 91, 80);
let rishiCard = new Card(52, 52, 52, 52, 52, 100);

let listOfCards1 = new Array(5); listOfCards1[0] = borisCard;
let listOfCards2 = new Array(5); listOfCards2[0] = rishiCard;

const game = new Game(listOfCards1, listOfCards2);

let statusCode = game.compareStat("totalPower");