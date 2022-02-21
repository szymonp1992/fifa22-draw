class Statistics {
    constructor() {
        this.drawnTeams = []
        this.numberOfDraws = 0
    }
    addDrawToStatistics(team, country, league, stats) {
        this.drawnTeams.push([team, country, league, stats]);
    }
    displayPreviousDraw(team, country, league, stats) {
        this.numberOfDraws += 1;
        const previousDrawsContainer = document.getElementById('previous-draws')
        if (this.numberOfDraws > 2) {
            previousDrawsContainer.lastChild.remove();
        }
        const previousDraw = document.createElement('div');
        previousDraw.classList.add('previous-draw')
        previousDraw.style.display = 'flex'
        previousDraw.style.alignItems = 'center';
        previousDraw.style.flexDirection = 'column';
        previousDraw.innerHTML = `
        <p>${team}</p>
        <p>${country}</p>
        <p>${league}</p>
        <p>${stats}</p>`
        previousDrawsContainer.prepend(previousDraw);
    }
}

const stats = new Statistics();