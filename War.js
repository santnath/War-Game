//This program is to create a functioning version of the card game war.
// this creates the deck of cards 
class Deck{
    constructor(cards){
    this.cards = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    this.suit =['♥','♦','♠','♣'];
    this.deck = [];

    }
    //this creates the deck of cards
    createCards(){
        for(let suitCounter = 0; suitCounter < 4; suitCounter++){
            for(let cardCounter = 0; cardCounter < 13; cardCounter++){
                this.deck.push(this.cards[cardCounter] + this.suit[suitCounter]);
                }
            }
        return this.deck;

    }
    //This "shuffles" or randomizes the order of the cards
    shuffleDeck(){
        for (let s = 0; s < this.deck.length; s++){
            let location1 = Math.floor((Math.random() * this.deck.length));
            let location2 = Math.floor((Math.random() * this.deck.length));
            let temp = this.deck[location1];
            this.deck[location1] = this.deck[location2];
            this.deck[location2] = temp;

        }
        return this.deck;
    }
}

let start = new Deck();
start;
let playerHand = [];
let computerHand = [];
// This creates splits the deck into two equal decks.. this one for the player
function dealPlayerHand(){
    start.createCards();
    start.shuffleDeck();
    let deckReady = start.shuffleDeck();
    let dealPlayer = deckReady.slice(0,26);
    playerHand.push(dealPlayer);
    return playerHand
}

// This creates splits the deck into two equal decks.. this one for the computer
function dealComputerHand(){
    start.createCards();
    start.shuffleDeck();
    let deckReady = start.shuffleDeck();
    let dealComputer = deckReady.slice(26,52);
    computerHand.push(dealComputer);
    return computerHand;
}
dealPlayerHand();
dealComputerHand();
// this class is set up to create the game logic
class PlayGame{
    constructor(){
        this.playerScore = 0;
        this.computerScore = 0;
        this.computerCard = null;
        this.playerCard = null;
        // this allows the computer to create a value for the card to compare 
        switch(this.playerCard,this.computerCard){
            case `2♥`,`2♦`,`2♠`,`2♣`:
                return 2;
            case `3♥`,`3♦`,`3♠`,`3♣`:
                return 3;
            case `4♥`,`4♦`,`4♠`,`4♣`:
                return 4;
            case `5♥`,`5♦`,`5♠`,`5♣`:
                return 5;
            case `6♥`,`6♦`,`6♠`,`6♣`:
                return 6;
            case `7♥`,`7♦`,`7♠`,`7♣`:
                return 7;
            case `8♥`,`8♦`,`8♠`,`8♣`:
                return 8;
            case `9♥`,`9♦`,`9♠`,`9♣`:
                return 9;
            case `10♥`,`10♦`,`10♠`,`10♣`:
                return 10;
            case `J♥`,`J♦`,`J♠`,`J♣`:
                return 11;
            case `Q♥`,`Q♦`,`Q♠`,`Q♣`:
                return 12;
            case `K♥`,`K♦`,`K♠`,`K♣`:
                return 13;
            case `A♥`,`A♦`,`A♠`,`A♣`:
                return 14;
            }
    } 
    // this plays a card from the player and computer's deck and compares them to decide who wins
    playCards(){
        for(let i = 0; i < 27; i++){
            this.playerCard = playerHand[0].pop();
            this.computerCard = computerHand[0].pop();
            
            if(this.playerCard > this.computerCard){
                console.log(this.playerCard,this.computerCard);
                this.playerScore += 1;
                i+1;
                console.log(`The score is player: ${this.playerScore} computer: ${this.computerScore}`);
            }
            else if(this.playerCard < this.computerCard){
                console.log(this.playerCard,this.computerCard);
                this.computerScore += 1;
                i+1;
                console.log(`The score is player: ${this.playerScore} computer: ${this.computerScore}`) ;
            } 
        }
        if(this.playerScore > this.computerScore){
            return `The score is player: ${this.playerScore} computer: ${this.computerScore}, player wins!`;

        }
        else if(this.playerScore < this.computerScore){
            return `The score is player: ${this.playerScore} computer: ${this.computerScore}, the Computer wins!`;
        } else {
            return `It's a tie. Play again!`;
        }
    }
    
}
//implitation of the game. 
let play = new PlayGame();
console.log(play.playCards());