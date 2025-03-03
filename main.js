let liczba = 3.141;
let promien = parseInt(prompt('Wypisz promień koła'));

if (isNaN(promien)) {
    document.write('wprowadz poprawnie pierwsza liczbe');
} 

else {
    document.write(circleArea());


    function circleArea() {
        let pole = liczba * promien * promien;
        const tekst = `<h2> pole koła o promieniu: ${promien} wynosi: ${pole}</h2>`;
        return tekst;
    }
}

      


