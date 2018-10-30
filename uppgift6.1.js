function uppgift6_2() {
    let n = prompt('Skriv in det nummer som du vill beräkna fakultet på:')
    fakultet(n);

    function fakultet(n) {
        if (n > 0) { // Den beräknar fakulteten för alla naturliga tal. Gränsen för javascripts MAX_VALUE (infinity) går vid 171!
            return (n * (fakultet(n - 1))); // Använder rekursion dvs den anropar en funktion från sig själv! “self-calling-function”. Värdet för varje beräkning sparas i RAM-minnet och återanvänds. Den fungerar som en loop i det här fallet.
        } else if (n == '0') { // Enligt definitionen av fakultet så är 0! = 1, vilket denna else if tar hand om.
            return 1;
        } else if (n == '') { // Detta meddelar att det du skrivit in är tomt och att du måste skriva in ett nummer för att funktionen ska fungera.
            return 'Du måste skriva in ett nummer.';
        } else { // Här hamnar man om man skriver ogiltliga tal, minus-tal och strängar eller annat skräp.
            return 'Fakultet kan endast beräknas på tal större än 0, testa igen!';
        }
    }
    alert(fakultet(n));
}