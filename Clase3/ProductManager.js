class ProductManager {

  constructor() {
    this.products = []
  }

  addProduct(code, title, description, price, thumbnail, stock){
    if(this.products.find(e => e.code === code) || arguments.length !== 6)
      return false

    let product = {
      code,
      title,
      description,
      price,
      thumbnail,
      stock
    }
    product["id"] = this.products.length !== 0
      ? this.products[this.products.length - 1]["id"] + 1
      : 1

    this.products.push(product);
    return product
  }

  getProducts(){
    return this.products
  }

  getProductById(id){
    return this.products.find(e => e.id === id) || "Not found"
  }
}




const productManager = new ProductManager
console.log(productManager.addProduct('PR1'))
console.log(productManager.addProduct(
  'PR1',
  'beer',
  'drink with alcohol',
  1,
  'google.com',
  100
))
console.log(productManager.addProduct(
  'PR2',
  'beer',
  'drink with alcohol',
  2,
  'google.com',
  200
))
console.log(productManager.addProduct(
  'PR2',
  'beer',
  'drink with alcohol',
  2,
  'google.com',
  200
))
console.log(productManager.addProduct(
  'PR3',
  'beer',
  'drink with alcohol',
  1.5,
  'google.com',
  150
))

console.log(productManager.getProducts())
console.log(productManager.getProductById(3))
console.log(productManager.getProductById(4))
