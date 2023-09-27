/*Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. */
var check;

var resultado, checkwhile, num1, num2;

do {
     check = prompt(`
    1. S Suma
    2. R Resta
    3. M Multiplicación
    4. D  Division
    5. V Ver resultado
    6. E Exit

`)

var checkminor = check.toLowerCase();


switch (checkminor) {
    
    case "s": 
    var num1 = prompt("Ingrese el primer numero");
    var num2 = prompt("ingrese el segundo");
    resultado = (num1 + num2);       
    break;

    case "r": 
    var num1 = prompt("Ingrese el primer numero");
    var num2 = prompt("ingrese el segundo");
    resultado = num1 - num2;       
    break;
    case "m": 
    var num1 = prompt("Ingrese el primer numero");
    var num2 = prompt("ingrese el segundo");
    resultado = num1 * num2;       
    break;
    case "d": 
    var num1 = prompt("Ingrese el primer numero");
    var num2 = prompt("ingrese el segundo");
    resultado = num1 / num2;       
    break;
    case "v":
     console.log(`El resultado es` + resultado); 
    break;
    case "e":

        checkwhile = "x";
    break;
}

} while (checkwhile != "x");


