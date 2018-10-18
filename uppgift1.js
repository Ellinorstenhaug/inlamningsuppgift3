function Person(namn, email, mobil, adress) {
    this.namn = namn;
    this.email = email;
    this.mobil = mobil;
    this.adress = adress;
    this.print = function () {
        return (`${this.namn}\n\n${this.adress.gatuadress}\n${this.adress.postnummer} ${this.adress.ort}`);
    }
}

function Adress(gatuadress, postnummer, ort) {
    this.gatuadress = gatuadress;
    this.postnummer = postnummer;
    this.ort = ort;
}

let ellinor = new Person("Ellinor Stenhaug", "Ellinor.Stenhaug@gmail.com", "073-6504717", new Adress("Strandskatevägen 4", "134 62", "Ingarö"));
console.log(ellinor.print());
document.write(ellinor.print());
