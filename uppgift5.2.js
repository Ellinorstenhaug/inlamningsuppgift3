function uppgift5_2() {
    let ggr = prompt("Hur många gånger vill du kasta tärningen?");
    alert("Mahmud kolla i konsolen \nGlad halloween!");

    function randomDice() {
        let arrDice = [];
        let smallArr = new Array(6).fill(0); // Gör en Array med 6 platser för att spara värdet på varsin plats. Eftersom man inte kan en plats som är tom '' i arrayen så fyller man upp den med talet 0 med hjälp av metoden fill() som finns till array.
        for (let i = 0; i < ggr; i++) { // Den här forloopen genererar slumpmässiga tal mellan 1-6 som repsenterar tärningsslagen. Antalet ggr man vill kasta tärningen läses in via prompt.
            arrDice[i] = Math.floor((Math.random() * 6) + 1); // arrDice[i] väljer plats i arrayen och tilldelas värdet av slumpmässiga tal genererat av ((Math.random() * 6) +1) Math.floor avrundar talet nedåt och visar ett heltal.
            let number = arrDice[i] // number sparar värdet som finns på index 'i' i arrDice.
            switch (number) { // Beroende på vad number får för värde så kommer den plussa på den specifika platsen i smallArr.
                case 1: smallArr[0]++; break;
                case 2: smallArr[1]++; break;
                case 3: smallArr[2]++; break;
                case 4: smallArr[3]++; break;
                case 5: smallArr[4]++; break;
                case 6: smallArr[5]++; break;
            }
        }
        console.log('Ettor\tTvåor\tTreor\tFyror\tFemmor\tSexor');
        return `${smallArr[0]}\t${smallArr[1]}\t${smallArr[2]}\t${smallArr[3]}\t${smallArr[4]}\t${smallArr[5]}`
    }
    console.log(randomDice());
}
uppgift5_2();