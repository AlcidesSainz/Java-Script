//Declarando una funcion
function suma(a, b) {
  console.log("Suma: " + (a + b));
}
//Llamando la funcion
suma(4, 2);
suma(2, 2);

//Utilizando una funcion con Return
function resta(c, d) {
  return c - d;
}
//Creando variable que almacena el valor de la funcion(esto es opcional)
let resultado = resta(3, 2);
//Mostrando resultado guardado en la variable
console.log(resultado);
//Mostrando resultado directamente sin guardar en una variable
console.log(resta(4, 2));
