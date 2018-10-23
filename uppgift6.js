// Skapa en funktion som räknar ut fakultet av ett valfritt heltal
// mellan 1 och 1000.
// • Testa funktionen via en prompt (i webbläsaren).
function factorial() {
    let number = prompt("Skriv i det nummer du vill faktorisera!");
    let result = calculation(number);
    calculation(number);

    // console.log(loop());
    // function loop() {
    //     for (let i = 0; i < 100; i++) {
    //         if (calculation(i) < Number.MAX_VALUE) {
    //             return calculation(i);
    //         }
    //         else {
    //             return "haha";
    //         }

    //     }

    function calculation(number) {
        if (number > 0 && number < Number.MAX_VALUE) {
            sum = (number * calculation(number - 1));
            return sum;
        } else if (number == 0) { //Fråga mahmud, varför går det ej med 3 ===
            return 1;
        } else if (!Number.isFinite(sum)) {
            return "Den funkar!";
        } else {
            return "AJAJ! Det får man inte faktorisera! Testa ett annat nummer!";
        }
    }
    alert(result);
}


//     for (let i = 0; i < 10; i++) {
//         sum = calculation(i);
//     }
//     // calculation(number);
//     alert(`${i} YAS`);