function randomDice(){
    let arrDice = [];
    for (let i = 0; i < 10; i++) {
        arrDice[i] = Math.floor((Math.random() * 6) +1); // arrDice[i] väljer plats i arrayen och tilldelas värdet av slumpmässiga tal genererat av ((Math.random() * 6) +1) Math.floor avrundar talet nedåt och visar ett heltal.
    }    
    return arrDice;
}

let number = arrDice
switch (number) {
    case 1:
        newArr[0] + 1;
        break;
    case 2:
        newArr[1] + 1;
        break;
    case 3:
        newArr[2] + 1;
        break;
    case 4:
        newArr[3] + 1;
        break;
    case 5:
        newArr[4] + 1;
        break;
    case 6:
        newArr[5] + 1;
        break;
    default:
        title = 'test';
        break;
    
}




let arrSort = randomDice().sort();
let lastIndex = arrSort.lastIndexOf(4) + 1;
let firstIndex = arrSort.indexOf(4);
console.log(arrSort);
console.log(lastIndex);
let arrSlice = arrSort.slice(firstIndex, lastIndex);
console.log(arrSlice.length);