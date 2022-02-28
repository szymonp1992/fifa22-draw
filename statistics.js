class Statistics {
    constructor() {
        this.drawnTeams = []
        this.numberOfDraws = 0
    }
    addDrawToStatistics(team, country, league, stats, logo) {
        this.drawnTeams.push({ team, country, league, stats, logo });
        this.numberOfDraws += 1;
    }
    displayPreviousDraw() {
        const previousDrawsContainer = document.getElementById('previous-draws')
        const previousDraw = document.createElement('div');
        previousDraw.classList.add('previous-draw')
        previousDraw.innerHTML = `
        <img src="./images/${this.drawnTeams[this.numberOfDraws - 1].logo}.png" alt="${this.drawnTeams[this.numberOfDraws - 1].logo}">
        <p>${this.drawnTeams[this.numberOfDraws - 1].team}</p>
        <p>${this.drawnTeams[this.numberOfDraws - 1].country}</p>
        <p>${this.drawnTeams[this.numberOfDraws - 1].league}</p>
        <p>${this.drawnTeams[this.numberOfDraws - 1].stats}${this.drawnTeams[this.numberOfDraws - 1].stats > 1 ? " stars" : " star"}</p>`
        previousDrawsContainer.prepend(previousDraw);
        if (this.numberOfDraws > 3) {
            previousDrawsContainer.lastChild.remove();
        }
    }
}

