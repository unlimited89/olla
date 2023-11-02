alert("Escribe el diámetro de la olla en cm");
var diametroOlla = parseFloat(prompt("Diametro de la Olla (cm):"));

alert("Escribe la altura de la olla en cm");
var alturaOlla = parseFloat(prompt("Altura de la Olla (cm):"));

var radioOlla = diametroOlla / 2;
var volumenOlla = Math.PI * Math.pow(radioOlla, 2) * alturaOlla;

alert("Realizamos la operación para calcular el volumen de la olla");
alert("El volumen de la olla es: " + volumenOlla.toFixed(2) + " cm³");

alert("Ahora pasamos el resultado de la olla a litros");
var resultadoOlla = volumenOlla / 1000;
alert("La olla tiene: " + resultadoOlla.toFixed(2) + " litros");

alert("Elige el diámetro del plato en cm");
var diametroPlato = parseFloat(prompt("Diametro del Plato (cm):"));

var radioPlato = diametroPlato / 2;
var V_plato = (2 * Math.PI * Math.pow(radioPlato, 3)) / 3;

alert("Realizamos operación");
alert("El volumen del plato es: " + V_plato.toFixed(2) + " cm³");

var resultadoPlato = V_plato / 1000;
alert("Ahora convertimos los cm³ del plato a litros");
alert("El volumen por cada plato es: " + resultadoPlato.toFixed(2) + " litros");
alert("Por cada olla salen: " + (resultadoOlla / resultadoPlato).toFixed(2) + " platos de sopa");

var invitados = parseInt(prompt("¿Cuántos invitados han confirmado?"));
var totalAgua = resultadoPlato * invitados;

alert("Se necesitan: " + totalAgua.toFixed(2) + " litros de agua para cumplir las expectativas");
alert("Se necesitan: " + (totalAgua / resultadoOlla).toFixed(2) + " ollas para poder hacer la sopa necesaria");

var aguaDisponible = parseFloat(prompt("Escriba cuántos litros máximo puede conseguir de agua"));

if (aguaDisponible >= totalAgua) {
    alert("El agua sería suficiente para hacer todas las sopas");
} else {
    alert("El agua solo alcanza para: " + (aguaDisponible / resultadoPlato).toFixed(2) + " invitados");
}
