/** Testing **/
const ProductManager = require('./ProductManager')

const productManager = new ProductManager('./Products.json')

console.log(productManager.getProducts())

console.log(productManager.addProduct(
  'producto prueba',
  'Este es otro producto prueba',
  200,
  'Sin imagen',
  'abc123456789',
  25
))

console.log(productManager.getProducts())

// console.log(productManager.getProductById(2))

console.log(productManager.updateProduct(1, {"title": "producto prueba reemplazo", "stock": 100}))

console.log(productManager.deleteProduct(1))