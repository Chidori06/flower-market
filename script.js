// Randomisation des intempéries
const intemperies = [
    {temps: "Soleil", couleur : "#faeb19"},
    {temps: "Nuages", couleur : "#96c5d7"},
    {temps: "Neige", couleur : "#ffffff"},
    {temps: "Pluie", couleur : "#908e98"}
];

const mainBackground = document.getElementById("meteo");
const meteoAleatoire = Math.floor(Math.random() * intemperies.length);
const choixFinal = intemperies[meteoAleatoire];

mainBackground.style.backgroundColor = choixFinal.couleur;
    