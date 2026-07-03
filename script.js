// Randomisation des intempéries
const intemperies = [
    { temps: "Soleil", couleur: "#faeb19" },
    { temps: "Nuages", couleur: "#96c5d7" },
    { temps: "Neige", couleur: "#ffffff" },
    { temps: "Pluie", couleur: "#908e98" }
];

const mainBackground = document.getElementById("meteo");
const meteoAleatoire = Math.floor(Math.random() * intemperies.length);
const choixFinal = intemperies[meteoAleatoire];

mainBackground.style.backgroundColor = choixFinal.couleur;

//Listes fleurs
const flowerList = [
    { nom: "Roses", prix: 3.50, couleur: "#e32525" },
    { nom: "Tulipes", prix: 2.00, couleur: "#c5175c" },
    { nom: "Lys", prix: 4.80, couleur: "#f2f2f2" },
    { nom: "Hortensias", prix: 8.00, couleur: "#1475bb" },
    { nom: "Pivoines", prix: 12.50, couleur: "#df80ff" }
];

//Variables
const divBackground = document.getElementById("bacFleurs");
const nameFlower = document.getElementById("flowerName");
const balisePrix = document.getElementById("price");

//Aléatoire pour fleurs et prix
let aleaFleur = Math.floor(Math.random() * flowerList.length);
let finalFlower = flowerList[aleaFleur];

//Données fleurs
nameFlower.innerText = finalFlower.nom;
balisePrix.innerText = `${finalFlower.prix.toFixed(2).replace('.', ',')} €`;
balisePrix.style.textAlign = "center";
divBackground.style.backgroundColor = finalFlower.couleur;
divBackground.style.padding = "20px";
divBackground.style.marginTop = "20px";

//Variable client
const divCustomer = document.getElementById("customer");
const divTotal = document.getElementById("totalClient");
const bank = {argent : 0};
const afficheBanque = document.getElementById("banque");

//Fonction générer un client et calculer le prix de la transaction
function generateClientAuto() {
        let timesRun = 0;
        const intervalID = setInterval(() => {
            timesRun++;
            console.log(`Exécution numéro : ${timesRun}`);    
        const fleurClient = Math.floor(Math.random() * (10)+1);
        divCustomer.innerHTML = `<p>Bonjour, je souhaiterais ${fleurClient} ${finalFlower.nom}, s'il vous plaît !</p>`;
        const Total = finalFlower.prix * fleurClient;
        divTotal.textContent = `Total : ${Total.toFixed(2).replace('.',',')} €`;
        console.log(divTotal);
        const totalBank = bank.argent += Total;
        afficheBanque.textContent = `${totalBank.toFixed(2).replace('.',',')}`;
        
            // On s'arrête QUAND on a atteint 10 exécutions
            if (timesRun >= 10) {
                clearInterval(intervalID);
                console.log("L'intervalle est arrêté !");
            }
        }, 3000);
        
    };

generateClientAuto();


