//Sinaxis antigua para declarar un arreglo
let carros = new Array("BMW", "Mercedez Benz", "Volvo");

//Forma actual de declarar
const carrosArreglo = ["Chevrolet", "KIA", "Nissan", "Audi"];
console.log(carrosArreglo);
console.log(carrosArreglo[0]);
console.log(carrosArreglo[1]);
console.log(carrosArreglo[2]);

//Recorrer  un arreglo
for (let i = 0; i < carrosArreglo.length; i++) {
  console.log(" [" + i + "] " + carrosArreglo[i]);
}
//Modificar un elemento del arreglo
carrosArreglo[1] = "KIA Picanto";

//Agregar elemento al arreglo
carrosArreglo.push("Masserati");
console.log(carrosArreglo);

//Preguntar si es un arreglo
console.log(Array.isArray(carrosArreglo));

//Otra forma de preguntar
console.log(carrosArreglo instanceof Array);
