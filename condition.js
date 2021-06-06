// Conditio la base:

let expression = true;

if (expression) {
    console.log("L'expression est vraie.");
} else {
    console.log("L'expression est fausse.");
}

// Plus poussé:

let poidMax = 120;
let ageMajeur = 18;
let poidClient = 85;
let ageClient = 22;

if (ageClient >= ageMajeur && poidClient < poidMax) {
    console.log("Vous pouvez monter dans ce manège.");
} else {
    console.log("Vous ne pouvez pas monter dans ce manège.");
}

