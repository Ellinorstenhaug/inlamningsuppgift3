function html4() {
    let r = prompt('Skriv in radien på din cirkel:');

    function sphere(r) {
        return `Volymen är ${((4 * Math.PI * Math.pow(r, 3))/3).toFixed(2)}\nArean är ${(4 * Math.PI * Math.pow(r,2)).toFixed(2)}`
        }
        alert(sphere(r));
}