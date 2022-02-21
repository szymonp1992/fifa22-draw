class Statistics {
    constructor() {
        this.drawnTeams = []
        this.numberOfDraws = 0
    }
    addDrawToStatistics(team, country, league, stats) {
        this.drawnTeams.push({ team, country, league, stats });
        this.numberOfDraws += 1;
    }
    displayPreviousDraw() {
        const previousDrawsContainer = document.getElementById('previous-draws')
        const previousDraw = document.createElement('div');
        previousDraw.classList.add('previous-draw')
        previousDraw.innerHTML = `
        <p>${this.drawnTeams[this.numberOfDraws - 1].team}</p>
        <p>${this.drawnTeams[this.numberOfDraws - 1].country}</p>
        <p>${this.drawnTeams[this.numberOfDraws - 1].league}</p>
        <p>${this.drawnTeams[this.numberOfDraws - 1].stats}</p>`
        previousDrawsContainer.prepend(previousDraw);
        if (this.numberOfDraws > 2) {
            previousDrawsContainer.lastChild.remove();
        }
    }
}

const stats = new Statistics();