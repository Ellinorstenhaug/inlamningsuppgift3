// Skapa en funktion som räknar ut fakultet av ett valfritt heltal
// mellan 1 och 1000.
// • Testa funktionen via en prompt (i webbläsaren).
function uppgift6() {
    let number = +prompt("Skriv i det nummer du vill faktorisera!");

    function calculation(number) {
        if (number > 0) {
            sum = (number * calculation(number - 1)); 
            return sum;
        } else if (number === 0) {
            return 1;
        } else if (number == "") {
            return "Du måste skriva i ett nummer!";
        } else {
            return "AJAJ! Det får man inte faktorisera! Testa ett nummer!";
        }
    }
    alert(calculation(number));
}