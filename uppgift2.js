function html2(){
    let a = prompt('Skriv in längden på den första kateten:')
    let b = prompt('Skriv in längden på den andra kateten:')
        function pyth(a, b){
            return (Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)));
        }
    alert(pyth(a, b));
}