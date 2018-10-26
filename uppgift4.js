function html4() { // Använder en funktion för att visa resultatet på hemsidan i form av en button onclick. 
    let r = prompt('Skriv in radien på din cirkel:'); //Radien sparas i en variabel

    let volume = `Volymen är ${((4 * Math.PI * Math.pow(r, 3))/3).toFixed(2)}\nArean är ${(4 * Math.PI * Math.pow(r,2)).toFixed(2)}` //Volymen räknas ut enligt given formel. Använder globala objektet Math, med medföljande egenskap PI (som returnerar värdet av Pi) samt metoden pow() (upphöjt till). Det globala objektet Numbers metod toFixed() används också (som avrundar till ett specifierat antal decimaler)
    alert(volume); //Resultatet visas i form av en dialogruta
}