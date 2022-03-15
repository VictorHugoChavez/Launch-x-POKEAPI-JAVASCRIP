let numero1;
numero1 = 4;
let numero2;
numero2 = 10;

console.log(numero1);
console.log("El primer numero es " + numero1 + "El segundo numero es " + numero2);

var frase;
frase = "Hola mundo desde Microsoft";
var frase2;
frase2 = 'mICROSOFT Y RECORDANDO TEMAS';
var frase3;
frase3 = `Creando Una variable`;

console.log(frase + "\n" + frase2 + "\n" + frase3);

console.log("\n********************Condicionales************************")

console.log(numero1 < numero2); // === es valor estricto

console.log("\n*******************Arreglos ******************");
let listaDeNumeros = [2, 3, 4, 64, 6454, 4];
const gravedad = 9.81; //no se modifica el valor

console.log(listaDeNumeros[3]);

listaDeNumeros.push(16); //agrega valores
listaDeNumeros.push(67641); // agrga mas valores push
console.log(listaDeNumeros.length);
console.log(frase.length)

console.log("\n******************* Objetos ******************");

let explorer = {
    nombre: "Victor Hugo Chavez",
    email: "victorcahvez997.vc@gmail",
    numreg: 123546,
    mision: "Fronend",
    proyectos: ["Abogabot", "Proyecto pasteleria", "Vaccination", "Pakeapi"]
}

let numeroy = 4;
let numerox = 6;

console.log("\n ************** if / else ***************** \n")
if (numerox > numeroy) {
    console.log("El numero x es mayor ");
} else if (numerox == numeroy) {
    console.log("ambos numeros son iguales");
} else {
    console.log("numero y es mayor que x");
}

let numberwhile = 0;
while (numberwhile <= 12) {
    console.log(numberwhile);
    numberwhile = numberwhile + 2;
}
console.log("Aqui  ya salio del while" + numberwhile);

/// ciclo do while////////
console.log("\n/******************* Do while ******************");
let numeroDoWhile = 10;
do {
    numeroDoWhile = numeroDoWhile + 2;
    console.log(numeroDoWhile);
} while (numeroDoWhile < 20);
console.log("Aqui sale del do while")

/* for*/

for (let i = 0; i < 20; i++) {
    console.log("AQUI ES EL FOR" + i);
}
console.log("aqui salimos del for" + i);


/* switch */
console.log("*********** switch **********");
switch (prompt("¿Como esta el clima")) {
    case "Lluioso":
        console.log("No te vallas a mojar");
        break;
    case "Soleado":
        console.log("Ponte bloqueador")
        break;
    default:
        console.log("No hay cloma");
        break;

}


//////////////////////////////////////// funciones ///////////////////////////////

const cuadrado = function(X) {
    return X * X;
}
let dif = 16;
console.log(cuadrado(16))
console.log(cuadrado(dif));

function rectangulo(x, z) {
    return x * z;
}
/// arrow fucntions
const restar = (zz, yy) => {
    return zz - yy;
}