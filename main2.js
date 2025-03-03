 var rectangleArea;
    const a = parseInt(prompt('Wypisz bok a'));
    const b = parseInt(prompt('Wypisz bok b'));
    document.write(rectangleArea(a, b));

    function rectangleArea(a, b) {
        let pole = a * b;
        const tekst = `<h2> pole prostokata wynosi: ${pole}</h2>`;
        return tekst;
    }