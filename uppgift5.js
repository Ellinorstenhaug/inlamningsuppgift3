function randomDice(){
    let arrDice = [];
    for (let i = 0; i < 40; i++) {
        arrDice[i] = Math.floor((Math.random() * 6) +1); // arrDice[i] väljer plats i arrayen och tilldelas värdet av slumpmässiga tal genererat av ((Math.random() * 6) +1) Math.floor avrundar talet nedåt och visar ett heltal.
    }    
    return arrDice;
}
let arrSort = randomDice().sort();
let lastIndex = arrSort.lastIndexOf(2) + 1;
let firstIndex = arrSort.indexOf(2);
console.log(arrSort);
console.log(lastIndex);
let arrSlice = arrSort.slice(firstIndex, lastIndex);
console.log(arrSlice.length);



