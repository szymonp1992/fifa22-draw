const teams = [
    ["Paris Saint-Germain", "France", "Ligue 1", false, 5],
    ["Liverpool", "England", "Premier League", false, 5],
    ["Manchester City", "England", "Premier League", false, 5],
    ["Bayern München", "Germany", "1. Bundesliga", false, 5],
    ["Real Madrid", "Spain", "Primera Division", false, 5],
    ["Chelsea", "England", "Premier League", false, 5],
    ["Atlético de Madrid", "Spain", "Primera Division", false, 5],
    ["Manchester United", "England", "Premier League", false, 5],
    ["Juventus", "Italy", "Serie A", false, 5],
    ["France", "International", "International", true, 5.0],
    ["Germany", "International", "International", true, 5.0],
    ["Portugal", "International", "International", true, 5.0],
    ["Spain", "International", "International", true, 5.0],
    ["England", "International", "International", true, 5.0],
    ["Argentina", "International", "International", true, 5.0],
    ["Italy", "International", "International", true, 5.0],
    ["Belgium", "International", "International", true, 5.0],
    ["FC Barcelona", "Spain", "Primera Division", false, 4.5],
    ["Inter", "Italy", "Serie A", false, 4.5],
    ["Sevilla FC", "Spain", "Primera Division", false, 4.5],
    ["Borussia Dortmund", "Germany", "1. Bundesliga", false, 4.5],
    ["Tottenham Hotspur", "England", "Premier League", false, 4.5],
    ["Milan", "Italy", "Serie A", false, 4.5],
    ["Real Sociedad", "Spain", "Primera Division", false, 4.5],
    ["Napoli", "Italy", "Serie A", false, 4.5],
    ["Ajax", "Holland", "Eredivisie", false, 4.5],
    ["Bergamo Calcio", "Italy", "Serie A", false, 4.5],
    ["RB Leipzig", "Germany", "1. Bundesliga", false, 4.5],
    ["Leicester City", "England", "Premier League", false, 4.5],
    ["Villarreal CF", "Spain", "Primera Division", false, 4.5],
    ["Arsenal", "England", "Premier League", false, 4.5],
    ["Bayer 04 Leverkusen", "Germany", "1. Bundesliga", false, 4.5],
    ["Everton", "England", "Premier League", false, 4.5],
    ["Real Betis Balompié", "Spain", "Primera Division", false, 4.5],
    ["Athletic Club de Bilbao", "Spain", "Primera Division", false, 4.5],
    ["West Ham United", "England", "Premier League", false, 4.5],
    ["Latium", "Italy", "Serie A", false, 4.5],
    ["Sporting CP", "Portugal", "Primeira Liga", false, 4.5],
    ["Roma", "Italy", "Serie A", false, 4.5],
    ["Holland", "International", "International", true, 4.5],
    ["Brazil", "International", "International", true, 4.5],
    ["Denmark", "International", "International", true, 4.5],
    ["Olympique Lyonnais", "France", "Ligue 1", false, 4.0],
    ["Borussia M'gladbach", "Germany", "1. Bundesliga", false, 4.0],
    ["Aston Villa", "England", "Premier League", false, 4.0],
    ["Wolverhampton Wanderers", "England", "Premier League", false, 4.0],
    ["Olympique de Marseille", "France", "Ligue 1", false, 4.0],
    ["Benfica", "Portugal", "Portugal Primeira Liga", false, 4.0],
    ["VfL Wolfsburg", "Germany", "1. Bundesliga", false, 4.0],
    ["AS Monaco", "France", "Ligue 1", false, 4.0],
    ["RCD Espanyol", "Spain", "Primera Division", false, 4.0],
    ["Valencia CF", "Spain", "Primera Division", false, 4.0],
    ["PSV", "Holland", "Eredivisie", false, 4.0],
    ["Granada CF", "Spain", "Primera Division", false, 4.0],
    ["FC Porto", "Portugal", "Primeira Liga", false, 4.0],
    ["TSG 1899 Hoffenheim", "Germany", "1. Bundesliga", false, 4.0],
    ["Newcastle United", "England", "Premier League", false, 4.0],
    ["Eintracht Frankfurt", "Germany", "1. Bundesliga", false, 4.0],
    ["RC Celta de Vigo", "Spain", "Primera Division", false, 4.0],
    ["Levante UD", "Spain", "Primera Division", false, 4.0],
    ["OGC Nice", "France", "Ligue 1", false, 4.0],
    ["Leeds United", "England", "Premier League", false, 4.0],
    ["LOSC Lille", "France", "Ligue 1", false, 4.0],
    ["CA Osasuna", "Spain", "Primera Division", false, 4.0],
    ["Stade Rennais", "France", "Ligue 1", false, 4.0],
    ["River Plate", "Argentina", "Primera División", false, 4.0],
    ["Fiorentina", "Italy", "Serie A", false, 4.0],
    ["Crystal Palace", "England", "Premier League", false, 4.0],
    ["Flamengo", "South America", "CONMEBOL Libertadores", false, 4.0],
    ["Brighton & Hove Albion", "England", "Premier League", false, 4.0],
    ["Burnley", "England", "Premier League", false, 4.0],
    ["Mexico", "International", "International", true, 4.0],
    ["Austria", "International", "International", true, 4.0],
    ["Poland", "International", "International", true, 4.0],
    ["Sweden", "International", "International", true, 4.0],
    ["Norway", "International", "International", true, 4.0],
    ["Ukraine", "International", "International", true, 4.0],
    ["Scotland", "International", "International", true, 4.0],
    ["Czech Republic", "International", "International", true, 4.0],
    ["Russia", "International", "International", true, 4.0],
    ["United States", "International", "International", true, 4.0],
    ["Wales", "International", "International", true, 3.5],
    ["Greece", "International", "International", true, 3.5],
    ["Canada", "International", "International", true, 3.5],
    ["Hungary", "International", "International", true, 3.5],
    ["Republic of Ireland", "International", "International", true, 3.5],
    ["Romania", "International", "International", true, 3.5],
    ["Finland", "International", "International", true, 3.5],
    ["Australia", "International", "International", true, 3.5],
    ["China PR", "International", "International", true, 3.0]
];