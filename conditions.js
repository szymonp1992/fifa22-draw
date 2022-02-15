// Klasa, która będzie zawierała metody do pobierania konkretnych wartości wybranych na stronie

class Conditions {
    checkCountry() { };
    checkLeague() { };
    checkNationalTeam() { };
    checkRating() {
        const ratings = [...document.querySelectorAll('[name="rating"]')];
        for (let i = 0; i < ratings.length; i++) {
            if (ratings[i].checked === true) {
                return ratings[i].value / 2;
            }
        }
    };
}