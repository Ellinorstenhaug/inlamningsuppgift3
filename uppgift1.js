function Person(name, epost, mobil, adress){
    this.name = name;
    this.epost = epost;
    this.mobil = mobil;
    this.adress = adress;
    this.print = function(){
        return `${this.adress.gatuadress} sdf${this.adress.postnummer} 'sdf'${this.adress.ort} `;
    
    }
}

let Adress = function (gatuadress, postnummer, ort){
    this.gatuadress = gatuadress;
    this.postnummer = postnummer;
    this.ort = ort;
    
    }

let ellinor = new Person("Ellinor", "ellinor.stenhaug@gmail.com", "0701233456", new Adress("Strandskatevägen 4","134 62", "Ingarö"));
let mikaela = new Person("Mikaela", "mikaela_johansson@hotmail.com", "0701233456", new Adress("Åstorpsringen 19","121 32", "Enskededalen"));


console.log(ellinor.print());