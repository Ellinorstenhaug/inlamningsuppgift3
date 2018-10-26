function uppgift1() { //Använder en funktion för att visa resultatet på hemsidan i form av en button onclick. 
    function Person(name, epost, mobil, adress) { //Gör en egen funcition object constructor som heter Person, med nödvändiga properties.
        this.name = name;
        this.epost = epost;
        this.mobil = mobil;
        this.adress = adress; //Adress är i sig själv en object constructor för att kunna hämta flera properties (Adress) under en property (Person). 
        this.print = function () { 
            return `<br>${this.name}<br>Gatuadress:&nbsp;&nbsp;&nbsp;${this.adress.gatuadress}<br>Postnummer:&nbsp;&nbsp;&nbsp;${this.adress.postnummer}<br>Postort:&nbsp;&nbsp;&nbsp${this.adress.ort}<br>`; // This är ett väldigt användbart nyckelord då man hämtar olika värden kopplade till det nyckelordet. Om du vill ha detta objekts egenskaper så måste this stå i samma block. 
        }
    }

    function Adress (gatuadress, postnummer, ort) { //Detta är ett objekt som ligger som en egenskap i objektet (Person). Ska man hämta värdet i detta objekt måste man först kalla på Persons egenskap adress med en dot notation. Därefter kan man hämta ut egenskaperna under Adress med en till dot notation.  
        this.gatuadress = gatuadress;
        this.postnummer = postnummer;
        this.ort = ort;
    }
    //Fyll på constructorn med värden som kopplas till nyckelordet i objektet. 
    let ellinor = new Person("Ellinor", "ellinor.stenhaug@gmail.com", "0701233456", new Adress("Strandskatevägen 4", "134 62", "Ingarö"));
    let mikaela = new Person("Mikaela", "mikaela_johansson@hotmail.com", "0701233456", new Adress("Åstorpsringen 19", "121 32", "Enskededalen"));

    //Skriver ut resultatet
    document.getElementById("elli").innerHTML = ellinor.print();
    document.getElementById("mickis").innerHTML = mikaela.print();
}