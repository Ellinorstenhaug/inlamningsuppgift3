function uppgift5_1() {
    function randomDice() {
        let ggr = prompt ("Hur många gånger vill du kasta tärningen?");
        alert("Mahmud! Kolla i konsolen!\nGlad halloween på dig 🎃 🎄 🎅🏽");
        let arrDice = []; 
        for (let i = 0; i < ggr; i++) {  // Den här forloopen genererar slumpmässiga tal mellan 1-6 som representerar tärningsslagen. Antalet ggr man vill kasta tärningen läses in via prompt.
            arrDice[i] = Math.floor((Math.random() * 6) + 1); // arrDice[i] väljer plats i arrayen och tilldelas värdet av slumpmässiga tal genererat av ((Math.random() * 6) +1) Math.floor avrundar talet nedåt och visar ett heltal.
        }
        return arrDice;
    }

    let smallArr = new Array(6).fill(0);// Gör en Array med 6 platser för att spara värdet på varsin plats. Eftersom man inte kan en plats som är tom '' i arrayen så fyller man upp den med talet 0 med hjälp av metoden fill() som finns till array.

    function print(arrDice) { //Parametern är arrayen arrDice som returneras av randomDice, dvs värdet av alla slumpade tärningskast. 
        for (let i = 0; i < arrDice.length; i++) { 
            number = arrDice[i]; // number sparar värdet som finns på index 'i' i arrDice.
            smallArr[number - 1]++; //När number är 1 ska den plussa på värdet på index 0 i smallArr.
        }
        console.log('Ettor\tTvåor\tTreor\tFyror\tFemmor\tSexor');
        return `${smallArr[0]}\t\t${smallArr[1]}\t\t${smallArr[2]}\t\t${smallArr[3]}\t\t${smallArr[4]}\t\t${smallArr[5]}`; //Använder två \t för att få en snygg tabell i browswer consolen
    }
    console.log(print(randomDice()));
}
