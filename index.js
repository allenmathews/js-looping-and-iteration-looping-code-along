// Code your solutions in this file
namesArr = ["Ada", "Brendan", "Ali"]


function writeCards(namesArr, event) {
    let cards = [];
    for (let i = 0; i < namesArr.length; i++) {
        cards.push(`Thank you, ${namesArr[i]}, for the wonderful surprise gift!`)
    }
    return cards;
}


function countDown(startingNum) {
    while (startingNum > 0) {
        console.log(startingNum);
        startingNum -= 1;
    }
    console.log(startingNum)
}