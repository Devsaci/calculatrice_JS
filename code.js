

/* let Addition = 1;
let Multiplication = 2;
let Soustraction = 3 ;
let Division = 4; */


// Fonction Addition 
function addition(nomnbreA,nomberB) {
    return nomnbreA + nomnbreA;
}
// Fonction Soustraction
function addition(nomnbreA,nomberB) {
    return nomnbreA - nomnbreA;
}
// Fonction Multiplication
function addition(nomnbreA,nomberB) {
    return nomnbreA * nomnbreA;
}
// Fonction Division
function addition(nomnbreA,nomberB) {
    return nomnbreA / nomnbreA;
}


do {
var choix = Number(prompt("Que souhaitez-vous faire ?\n\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n")); 
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4);

do {
    var premierNombre = Number(prompt("Entrez un premier Nombre")) ;
    var deuxiemeNombre = Number(prompt("Entrez un deuxième Nombre")) ;
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre));

