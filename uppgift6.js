// Skapa en funktion som räknar ut fakultet av ett valfritt heltal
// mellan 1 och 1000.
// • Testa funktionen via en prompt (i webbläsaren).
function factorial () {
let number = prompt("Skriv i det nummer du vill faktorisera!");
let result= calculation(number);
    calculation(number);
    function calculation(number) {
        if (number < 0)
            return -1;
        else if (number === 0)
            return 1;
        else {
            sum = (number * calculation(number - 1));
            return sum;
        }
    }
    alert(result);
}