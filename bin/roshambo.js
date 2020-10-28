#!/usr/bin/env node
const { argv } = require('yargs')

class Player{
    constructor(hand){
        this.hand = hand
    }

    getHand() {
        return this.hand
    }
}

class Compete{
    constructor(player1, player2){
        this.player1 = player1
        this.player2 = player2
    }

    declareWinner(){
        let p1 = this.player1
        let p2 = this.player2
        
        if (p1.getHand() === 'rock'){
            if ( p2.getHand() === 'scissors') {  
                console.log('~Player wins.~')
            } else if ( p2.getHand() === 'paper'){
                console.log('~Computer wins.~')
            } else {
                console.log('~Draw.~')
            }
        } else if (p1.getHand() === 'paper'){
            if ( p2.getHand() === 'rock') {  
                console.log('~Player wins.~')
            } else if ( p2.getHand() === 'scissors'){
                console.log('~Computer wins.~')
            } else {
                console.log('~Draw.~')
            }
        } else {
            if ( p2.getHand() === 'paper') {  
                console.log('~Player wins.~')
            } else if ( p2.getHand() === 'rock'){
                console.log('~Computer wins.~')
            } else {
                console.log('~Draw.~')
            }
        }
        
    }

}

let p1 = new Player(argv.move)
let p2 = Math.round(Math.random()) ? new Player('paper') : new Player('rock')
let round1 = new Compete(p1, p2)

console.log('Playing a game of Roshambo against the computer.')
console.log(`Player plays ${p1.getHand()}!`)
console.log(`Computer plays ${p2.getHand()}!`)
round1.declareWinner();
