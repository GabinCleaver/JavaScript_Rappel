/* Les boucles */

// La boucle while (tant que) (Quand on ne sait pas combien de fois elle va s'exécuter)
let compteur = 0;
while (compteur < 3) {
  console.log("compteur : " + compteur);
  console.log("Instruction de la boucle while");
  compteur = compteur + 1;
}

// Boucle infinie
let compteur = 0;
while (true) {
  console.log("compteur : " + compteur);
  compteur = compteur + 1;
}

// Utilité d'une boucle infinie ?
// Jeux vidéo, Système embarqué / OS

// Boucle do... while (faire... tant que) (quand elle va s'exectuer au moins une fois)
let compteur = 0;
do {
  console.log("compteur : " + compteur);
  console.log("Instruction de la boucle do... while");
  compteur = compteur + 1;
} while (compteur < 3);

// console.log("Ligne pour éviter que le débogueur saute à la fin du fichier...");

// Boucle for (Quand on sait combien de fois elle va s'exécuter)
for (let compteur = 0; compteur < 3; compteur = compteur + 1) {
  console.log("compteur : " + compteur);
  console.log("Instruction de la boucle for");
}

// On n'est pas obligé d'utiliser des nombres
let rireMoqueur = "Mouah";
while (rireMoqueur !== "Mouahahahahah") {
  rireMoqueur = rireMoqueur + "ah";
}
console.log(rireMoqueur);

/* Comparaisons visuelles des boucles */