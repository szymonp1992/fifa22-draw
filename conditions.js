// Klasa, która będzie zawierała metody do pobierania konkretnych wartości wybranych na stronie

class Conditions {
    checkCountry(country, teamScope) {
        if (!country) {
            return teamScope;
        }
        const teamsInCountry = teamScope.filter(team => team[1].toLowerCase() === country.toLowerCase());
        return teamsInCountry;
    };
    checkLeague(league, teamScope) {
        if (!league) {
            return teamScope;
        }
        const teamsInLeague = teamScope.filter(team => team[2].toLowerCase() === league.toLowerCase().replace("-", " "));
        return teamsInLeague;
    };
    checkNationalTeam(national, teamScope) {
        if (national) {
            return teamScope;
        }
        const nationalTeams = teamScope.filter(team => team[3] === national);
        return nationalTeams;
    };
    checkRating(rating, teamScope) {
        if (!rating) {
            return teamScope;
        }
        const teamsOfRating = teamScope.filter(team => team[4] === rating)
        return teamsOfRating;
    }
}