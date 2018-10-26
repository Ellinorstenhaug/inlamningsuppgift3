function randomDice(){
    let arrDice = [];
    for (let i = 0; i < 10; i++) {
        arrDice[i] = Math.floor((Math.random() * 6) +1); // arrDice[i] väljer plats i arrayen och tilldelas värdet av slumpmässiga tal genererat av ((Math.random() * 6) +1) Math.floor avrundar talet nedåt och visar ett heltal.
    }    
    return arrDice;
}

let newArr = [0, 0, 0, 0, 0, 0];
function checkNumber(arrDice){
    for (let i = 0; i < arrDice.length; i++){
        number = arrDice[i];
        newArr[number-1]++;
    }
    return newArr
}

let arraytest = randomDice()
console.log(arraytest);
console.log(checkNumber(arraytest));
console.table(newArr);