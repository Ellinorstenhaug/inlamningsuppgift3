function mickis() {
    let n = prompt('Skriv in ett nummer:')

    function fakultet(n) {
        if (n != 0 && n != isNaN(n)) {
            return (n * (n - 1));
        } else {
            alert('Fakultet kan endast beräknas på tal större än 0, testa igen!');
            prompt('Skriv in den siffran du vill räkna fakultet på:')
        }
    }
    console.log(fakultet(0))
}
