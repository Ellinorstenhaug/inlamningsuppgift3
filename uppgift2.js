function HTML2() {
let a = prompt("Vad är längden på triangeln?"); 
let b = prompt("Vad är höjden på triangeln?");

function pythagoras(a, b) {
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)); //Blir (a^2 + b^2)^1/2
    return c; 
}
alert(`Hypotenusan är ${pythagoras(a,b)}`);
}