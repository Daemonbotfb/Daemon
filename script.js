// script.js

// Ajoute un écouteur d'événement pour le bouton de génération de compte Wave
document.getElementById('generateAccount').addEventListener('click', function () {
    // Générer un nouveau solde aléatoire entre 0 et 100 000 FCFA
    const newBalance = Math.floor(Math.random() * 100000);
    
    // Mettre à jour le texte du solde avec le nouveau solde généré
    document.getElementById('solde').innerText = newBalance + ' FCFA';
});

// Ajoute un écouteur d'événement pour le bouton de retrait vers Orange Money
document.getElementById('withdrawOrange').addEventListener('click', function () {
    // Simuler le retrait vers Orange Money
    alert('Retrait vers Orange Money en cours...');
});