function HTML2(){ // Använder en funktion för att visa resultatet på hemsidan i form av an button-onclick
    let a = prompt('Skriv in längden på den första kateten:')
    let b = prompt('Skriv in längden på den andra kateten:')
    let pytagoras = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2); // Använder två globala objekt i Math.pow() (upphöjt till) och Math.sqrt() (roten ur). Använder toFixed(2) för att snygga till decimalerna i detta fall väljer vi att ha två decimaler. toFixed() är en metod som tillhör det globala objektet Number.
    alert(`Hypotenusan är ${pytagoras}`); // Efter att man har skrivit in kateternas värden använder den pytagoras matematiska formel för att beräkna hypotenusan. Svaret kommer upp som en alert på webbsidan.
}