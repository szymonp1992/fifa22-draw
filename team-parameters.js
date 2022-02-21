class TeamParameters {
    constructor(country = this.getCountry(), league = this.getLeague(), nationalTeam = this.getNationalTeam(), rating = this.getRating()) {
        this.country = country;
        this.league = league;
        this.nationalTeam = nationalTeam;
        this.rating = rating;
    }

    getCountry() {
        return document.getElementById('country').value
    }
    getLeague() {
        return document.getElementById('league').value
    }
    getNationalTeam() {
        const nationalTeamCheckbox = document.getElementById('national');
        return nationalTeamCheckbox.checked;
    }
    getRating() {
        const ratings = [...document.querySelectorAll('[name="rating"]')];
        for (let i = 0; i < ratings.length; i++) {
            if (ratings[i].checked === true) {
                return ratings[i].value / 2;
            }
        }
    }
}
