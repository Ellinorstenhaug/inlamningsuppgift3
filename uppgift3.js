function html3(){ // Använder en funktion för att visa resultatet på hemsidan i form av an button-onclick
    let r = prompt('Skriv in radien på din cirkel:'); // Läser in värdet på radien via en prompt
    let radie = `Omkretsen är: ${(2 * Math.PI * r).toFixed(2)}\nArean är: ${(Math.PI * Math.pow(r, 2)).toFixed(2)}` // Omkretsen räknas ut enligt given formel. Använder globala objektet Math, med medföljande egenskap PI (som returnerar värdet av Pi) samt metoden pow() (upphöjt till). Det globala objektet Numbers metod toFixed() används också (som avrundar till ett specifierat antal decimaler)
    alert(radie); // Visar resultatet i form av en alert på webbsidan
}