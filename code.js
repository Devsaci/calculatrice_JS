/*  Projet Calculatrice JAVASCRIPT
    Auteur SACI ZAKARIA
*/

// etape 1 : Demandez un mode de calcul
do {
var choix = Number(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n")); 
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

// Etape 2 : Demandez deux nombres à
do {
    var premierNombre = Number(prompt("Entrez un premier Nombre")) ;
    var deuxiemeNombre = Number(prompt("Entrez un deuxième Nombre")) ;
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));


// Etape 3 : Creez les 4 fonctions
// Fonction Addition 
function addition(nomnbreA,nomberB) {
    return nomnbreA + nomnbreB;
}
// Fonction Soustraction
function soustraction(nomnbreA,nomberB) {
    return nomnbreA - nomnbreB;
}
// Fonction Multiplication
function multiplication(nomnbreA,nomberB) {
    return nomnbreA * nomnbreB;
}

// Fonction Division
function division(nomnbreA,nomberB) {
    return nomnbreA / nomnbreB;
}


//Etape 4 : Appelez les Fonctions à utiliser
switch (choix) {
    case 1:
        var resultat = addition(premierNombre,deuxiemeNombre)
        break;
    case 2:
        var resultat = multiplication(premierNombre,deuxiemeNombre)
        break;
    case 3:
        var resultat = soustraction(premierNombre,deuxiemeNombre)
        break;
    case 4:
        var resultat = division(premierNombre,deuxiemeNombre)
        break;
}

//Etape 5 : Afficher le résultat
alert("Voici le résultat :   "+ resultat)