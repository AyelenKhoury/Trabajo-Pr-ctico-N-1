// 1)- Crear una variable de tipo constante cuyo valor sea el siguiente mensaje “Fin del Ejercicio”

const finDelEjercicio = "Fin del Ejercicio";
console.log(finDelEjercicio);


// 2)- Declarar 5 variables de tipo string y concatenarlas en diferente orden

let saludo = "Hola mundo! ";
let enunciado = "Este es un ejercicio que consiste en ";
let ejercicio = "concatenar variables en diferente orden ";
let condicion = "sin importar que la oración formada no tenga sentido ";
let despedida = "eso es todo. ¡Saludos!"
console.log(saludo + ejercicio + despedida + enunciado + condicion);

// 3)- Declare 5 variables que sean números decimales y realice la sumatoria de todos los productos, devolviendo el resultado final al cliente

let frutasYVerduras = 1233.70;
let carne = 2758.40;
let alimentoMascota = 6449.50;
let papelHigienico = 499.90;
let yerba = 393.50;
let totalAPagar = frutasYVerduras + carne + alimentoMascota + papelHigienico + yerba;
console.log("El total a pagar es $" + totalAPagar);

// a) Aplicar un descuento del 10% a los productos para mascotas e imprimir el nuevo monto a abonar al cliente

let totalConDescuento = frutasYVerduras + carne + papelHigienico + yerba + alimentoMascota - alimentoMascota * 0.1;
console.log("El total a pagar con descuento es $" + totalConDescuento);

// b) Aplicar un recargo del 18% total del valor de la compra total por pago con tarjeta de crédito, imprimir en consola el monto total a pagar y el precio por cuota (ya que el cliente desea abonar en 3 cuotas)

let totalConTarjeta = totalAPagar * 1.18;
console.log("El total a pagar con tarjeta de crédito es $" + totalConTarjeta, "en 3 cuotas de $" + totalConTarjeta / 3);

// c) Un amigo del cliente llegó al super y decidió abonar la mitad del monto total en efectivo. Al recibir la mitad en efectivo, sólo se deberá aplicar el recargo del 18% al total de la mitad del producto. Imprimir por consola el monto nuevo a abonar y el precio por cuota 5.667,5 6.687,65               12.355,15

let pagoEfectivo = totalAPagar / 2;
let pagoTarjeta = pagoEfectivo * 1.18;
let totalPagoCombinado = pagoEfectivo + pagoTarjeta;
console.log("El total a pagar con pago combinado es $" + totalPagoCombinado, "en 3 cuotas de $" + totalPagoCombinado / 3);


// 4)- Declarar 6 variables de tipo number y aplicar operadores lógicos y de igualdad:

let num1 = 23;
let num2 = 66;
let num3 = 58;
let num4 = 256;
let num5 = 485;
let num6 = 4;

// a) Crear una variable dónde preguntemos si una de las variables creadas anteriormente es mayor que otra

let mayorQue = num3 > num5;
console.log("El resultado es = " + mayorQue);

// b) Crear una variable dónde preguntemos si una de las variables creadas anteriormente es menor que otra

let menorQue = num1 < num4;
console.log("El resultado es = " + menorQue);

// c) Crear 3 variables dónde utilicemos el operador AND usando las variables creadas anteriormente.

let afirmacion1 = num6 < num3; 
let afirmacion2 = num1 > num2; 
let afirmacion3 = num5 >= num4; 

console.log("El resultado de esta afirmación es = " + (afirmacion1 && afirmacion3));
console.log("El resultado de esta afirmación es = " + (afirmacion2 && afirmacion3));
console.log("El resultado de esta afirmación es = " + (afirmacion1 && afirmacion2));

// d) Crear 3 variables dónde utilicemos sl operador OR usando las variables creadas anteriormente

console.log("El resultado de esta expresión es = " + (afirmacion2 || afirmacion3));
console.log("El resultado de esta expresión es = " + (afirmacion3 || afirmacion1));
console.log("El resultado de esta expresión es = " + (afirmacion1 || afirmacion2));

// e) Crear una variable dónde utilizaremos el operador AND, elegiremos una de las 6 variables creadas anteriormente, y utilizaremos el operador: si la variable es PAR Y es mayor a 50

/* let par = 2, 4 , 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50;
let mayorQue50 = 50;
let parYMayorQue50 = par + mayorQue50;

console.log(num2 && parYMayorQue50); 
NO ENTENDI :(*/