function mickis() {
    let n = prompt('Skriv in ett nummer:')
    fakultet(n);

    function fakultet(n) {
        if (n > 0 && n != isNaN(n)) {
            return (n * (fakultet(n - 1)));
        } else if (n == 0) {
            return 1;
        } else {
            return 'Fakultet kan endast beräknas på tal större än 0, testa igen!';
        }
    }
    alert(fakultet(n));
}