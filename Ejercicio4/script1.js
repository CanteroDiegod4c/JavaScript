//Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
//ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
//que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.

var caracter = prompt("Si o no? S/N");
var lowercase = caracter.toLowerCase();

var check = (lowercase == "s" || lowercase == "n") ? `CORRECTO` : `INCORRECTO`;

console.log(lowercase);
console.log(check);