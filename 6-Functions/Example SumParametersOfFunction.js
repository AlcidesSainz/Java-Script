let resultado = sumarTodo(3, 6, 7, 8, 9, 11);
console.log(resultado);

function sumarTodo() {
  let suma = 0;
  for (let i = 0; i < arguments.length; i++) {
    suma += sumarTodo.arguments[i];
  }
  return suma;
}
