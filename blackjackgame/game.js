let firstcard=11
let secondcard=9
let sum = firstcard + secondcard
let hasblackjack = false
let isAlive =true
let message =""
console.log(sum)
if(sum <= 20){
    message="do you want to draw a new card?"
}
else if(sum === 21){
message="wohoo! you've got blackjack"
hasblackjack = true 
}
else{
    message="you're out of the game"
    isAlive = false
}
console.log(message)

