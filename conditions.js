class Conditions {
    constructor(country, league, nationalTeam) {
        this.country = country;
        this.league = league;
        this.nationalTeam = nationalTeam;
    }
    checkRating() {
        const ratings = [...document.querySelectorAll('[name="rating"]')];
        for (let i = 0; i < ratings.length; i++) {
            console.log(ratings[i])
            if (ratings[i].checked === true) {
                return ratings[i].value / 2;
            }
        }
    }
}

const conditions = new Conditions()