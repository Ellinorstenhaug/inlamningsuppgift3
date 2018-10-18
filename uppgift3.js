function html3(){
    let r = prompt('Skriv in radien på din cirkel:');
        function radie(r){
            return `Omkretsen är ${2 * Math.PI * r} \n Arean är ${Math.PI * Math.pow(r, 2)}`
        }
        alert(radie(r));
    }