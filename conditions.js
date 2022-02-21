// Klasa, która będzie zawierała metody do pobierania konkretnych wartości wybranych na stronie

class Conditions {
    checkCountry(country, teamScope) {
        const teamsInCountry = teamScope.filter(team => team[1] === country);
        return teamsInCountry;
    };
    checkLeague(league, teamScope) {
        const teamsInLeague = teamScope.filter(team => team[2] === league);
        return teamsInLeague;
    };
    checkNationalTeam(national, teamScope) {
        const nationalTeams = teamScope.filter(team => team[3] === national);
        return nationalTeams;
    };
    checkRating(rating, teamScope) {
        const teamsOfRating = teamScope.filter(team => team[4] === rating)
        return teamsOfRating;
    }
}

const conditions = new Conditions()


