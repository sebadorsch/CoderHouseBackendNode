/** Testing **/
const ProductManager = require('./ProductManager')

const productManager = new ProductManager('./Products.json')

console.log(productManager.getProducts())

// console.log(productManager.addProduct())

console.log(productManager.addProduct(
  'producto prueba',
  'Este es otro producto prueba',
  200,
  'Sin imagen',
  'abc123456789',
  25
))

console.log(productManager.getProductById(6))

console.log(productManager.updateProduct(6, {"title": "producto prueba reemplazo", "stock": 100}))

console.log(productManager.deleteProduct(1))