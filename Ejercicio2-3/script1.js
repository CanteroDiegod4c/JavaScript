var num = prompt(`     Ingrese un número para calcular
    El area y perimetro de un circulo`);

const PI = 3.14;

var area = PI * (Math.pow(num,2)); 
var perimetro = 2 * PI * num;

console.log(
`El area del circulo es ${area}
El perimetro es ${perimetro}`);



var edad = prompt("Ingrese su edad");

var check = (edad > 18) ? `Es mayor de edad` : `Es menor de edad`;

alert(check);

prompt("I")