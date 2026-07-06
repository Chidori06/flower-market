//Variables utiles
let finalFlower;
const bank = { argent: 0 };
const afficheBanque = document.getElementById("banque");
const timeEl = document.getElementById('time');
const startBtn = document.getElementById('start-btn');
const divBackground = document.getElementById("bacFleurs");
const nameFlower = document.getElementById("flowerName");
const balisePrix = document.getElementById("price");
const standChange = document.getElementById("standChange");
const divCustomer = document.getElementById("customer");
const divTotal = document.getElementById("totalClient");
let isPlaying = false;
let timeLeft = 30;
let gameInterval;
let clientTimeout;

// Liste des météos dispos
const intemperies = [
    { temps: "Soleil", imgSrcStand: 'img/photo_stand.png' },
    { temps: "Nuages", imgSrcStand: 'img/photo_stand_orage.png' },
    { temps: "Neige", imgSrcStand: 'img/photo_stand_neige.png' },
    { temps: "Pluie", imgSrcStand: 'img/photo_stand_pluie.png' }
];

//Liste des fleurs dispos
const flowerList = [
    { nom: "Roses", prix: 3.50, couleur: "#e32525" },
    { nom: "Tulipes", prix: 2.00, couleur: "#c5175c" },
    { nom: "Lys", prix: 4.80, couleur: "#f2f2f2" },
    { nom: "Hortensias", prix: 8.00, couleur: "#1475bb" },
    { nom: "Pivoines", prix: 12.50, couleur: "#df80ff" }
];

//Fonctions
//randomiser un nombre
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//fonction randomisation des intempéries
function randomizeWeather() {
    const meteoAleatoire = intemperies[getRandomInt(0, intemperies.length - 1)];
    standChange.src = meteoAleatoire.imgSrcStand;
}


//Fonction pour générer une fleur aléatoire
function generateFlowers() {
    //Aléatoire pour fleurs et prix
    let aleaFleur = Math.floor(Math.random() * flowerList.length);
    finalFlower = flowerList[aleaFleur];

    //Données fleurs
    nameFlower.innerText = finalFlower.nom;
    balisePrix.innerText = `${finalFlower.prix.toFixed(2).replace('.', ',')} €`;
    balisePrix.style.textAlign = "center";
    divBackground.style.backgroundColor = finalFlower.couleur;
    divBackground.style.padding = "20px";
    divBackground.style.marginTop = "20px";

}

function generateClientAuto() {

    //Si la journée est lancée
    if (!isPlaying) return;

    // Le client choisit un nombre de fleur au hasard
    const fleurClient = Math.floor(Math.random() * (10) + 1);
    //Affiche la phrase
    divCustomer.innerHTML = `<p>Bonjour, je souhaiterais ${fleurClient} ${finalFlower.nom}, s'il vous plaît !</p>`;
    //Calcul le prix
    const Total = finalFlower.prix * fleurClient;
    //Montre le total
    divTotal.textContent = `Total : ${Total.toFixed(2).replace('.', ',')} €`;
    console.log(divTotal);
    //Ajoute l'argent dans la caisse
    const totalBank = bank.argent += Total;
    afficheBanque.textContent = `${totalBank.toFixed(2).replace('.', ',')}`;

    // Prochain client entre 2 et 5 secondes
    const nextClientTime = getRandomInt(2000, 5000);
    clientTimeout = setTimeout(generateClientAuto, nextClientTime);

}

function startGame() {
    // Initialisation
    let money = bank.argent;
    if (money == 0) {
        money = 0;

    } else {
        money = bank.argent;

    }
    timeLeft = 30;
    timeEl.textContent = timeLeft;
    isPlaying = true;
    startBtn.disabled = true;

    //Initialisation
    randomizeWeather();

    generateFlowers();

    // Lancer le timer
    gameInterval = setInterval(() => {
        timeLeft--;
        timeEl.textContent = timeLeft;

        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);

    // Clients qui arrivent
    generateClientAuto();
}

function endGame() {
    isPlaying = false;
    clearInterval(gameInterval);
    clearTimeout(clientTimeout);
    startBtn.disabled = false;
    startBtn.textContent = "Recommencer une journée";
}

// --- ÉVÉNEMENTS ---
startBtn.addEventListener('click', startGame);




