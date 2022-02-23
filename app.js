const drawBtn = document.getElementById('drawBtn');
const stats = new Statistics();

const drawTeam = () => {
    const parameters = new TeamParameters();
    const conditions = new Conditions()
    const afterCountryCheck = conditions.checkCountry(parameters.country, teams);
    const afterLeagueCheck = conditions.checkLeague(parameters.league, afterCountryCheck);
    const afterNationalCheck = conditions.checkNationalTeam(parameters.nationalTeam, afterLeagueCheck);
    const afterRatingCheck = conditions.checkRating(parameters.rating, afterNationalCheck);
    const drawnTeamIndex = Math.floor(Math.random() * afterRatingCheck.length);
    const drawnTeam = afterRatingCheck[drawnTeamIndex];
    console.log(drawnTeam);
    if (!drawnTeam) {
        document.querySelector('.error-message').style.display = 'block';
    } else {
        document.querySelector('.error-message').style.display = 'none';
    }
    stats.addDrawToStatistics(drawnTeam[0], drawnTeam[1], drawnTeam[2], drawnTeam[4])
    stats.displayPreviousDraw();
}

drawBtn.addEventListener('click', drawTeam);