const heuresDiv = document.querySelector('.heures');
const dateDiv = document.querySelector('.date');

const affichageHeure = function() {
    // declaration des variables :

    let today, annee, listeMois, mois, listeJours, jourNUmero,
    jourNom, heures, minutes, secondes, deuxChiffres;

    // Recuperer la date actuelle :
    today = new Date();

    // recuperer l'annee :
    annee = today.getFullYear();

    // recuperer le mois:
    listeMois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"];
    mois = listeMois[today.getMonth()];

    // recuoerer le numero du jour du mois
    jourNUmero = today.getDate();

    // recuperer jours. mais la sumaine commence le dimanche en javascript
    listeJours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    jourNom = listeJours[today.getDay()];
    // afficher les heures,minutes et secoonde en chiffres :
    deuxChiffres = function(element) {
        if(element < 10) {
            return element = "0" + element;
        } else {
            return element;
        }
        
    }
    //recuperer les heures :
    heures = deuxChiffres(today.getHours());

    //recuperer les minutes:
    minutes = deuxChiffres(today.getMinutes());

    // les secondes
    secondes = deuxChiffres(today.getSeconds());

    // affichage dans nox div de html

    heuresDiv.textContent = heures + ":" + minutes + ":" + secondes;
    dateDiv.textContent = jourNom + ", " + jourNUmero + " " + mois + " " + annee;

    // lancement de la fonction affichage heure toutes les 1000 ms, en gros chaque seconde quoi
    setTimeout(affichageHeure, 1000);
}
affichageHeure();