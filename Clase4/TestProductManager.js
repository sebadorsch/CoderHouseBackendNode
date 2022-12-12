/** Testing **/
const ProductManager = require('./ProductManager')

const productManager = new ProductManager('./Products.json')

console.log(productManager.getProducts())

console.log(productManager.addProduct(
  'producto prueba',
  'Este es otro producto prueba',
  200,
  'Sin imagen',
  'abcaa1236789',
  25
))
console.log(productManager.addProduct(
  'producto prueba',
  'Este es otro producto prueba',
  200,
  'Sin imagen',
  'abcd123789',
  25
))
console.log(productManager.addProduct(
  'producto prueba',
  'Este es otro producto prueba',
  200,
  'Sin imagen',
  'aeb3456',
  25
))
console.log(productManager.addProduct(
  'producto prueba',
  'Este es otro producto prueba',
  200,
  'Sin imagen',
  'abcc123456789',
  25
))

console.log(productManager.getProducts())

// console.log(productManager.getProductById(2))

// console.log(productManager.updateProduct(2, {"title": "producto prueba reemplazo", "code": 100}))

console.log(productManager.deleteProduct(3))