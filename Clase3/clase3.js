// Utilizacion ES6-ES9 - Dados los objetos indicados en la siguiente diapositiva:
//   - Realizar una lista nueva (array) que contenga todos los tipos de productos (no cantidades),
//   consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
//   - Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)

const objetos = [
  { manzanas: 3, peras: 2, carne: 1, jugos: 5, dulces: 2 },
  { manzanas: 1, sandias: 1, huevos: 6, jugos: 1, panes: 4 }
]

console.log(objetos.map(e => Object.keys(e)))         //return keys
console.log(objetos.map(e => Object.values(e)))       //return values

let totalValues = objetos.map(e => Object.values(e))  //return an array with two arrays
totalValues = totalValues.flat()                      //made it one

console.log(totalValues.reduce((toSumValue, accumulatedValue) => {
  return toSumValue + accumulatedValue
}))   //return the sum of all values