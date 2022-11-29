class ProductManager {

  constructor() {
    this.products = []
  }

  addProduct(title, description, price, thumbnail, code, stock){
    if(this.products.find(e => e.code === code) || arguments.length !== 6) {
      return "Error"
    }

    let product = {
      title,
      description,
      price,
      thumbnail,
      code,
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



//Se creará una instancia de la clase “ProductManager”
const productManager = new ProductManager

console.log(
  '\nSe llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []\n',
  productManager.getProducts()
)

console.log(
  "\nSe llamará al método “addProduct” y el objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE\n",
  productManager.addProduct(
  'producto prueba',
  'Este es un producto prueba',
  200,
  'Sin imagen',
  'abc123',
  25
))

console.log(
  "\nSe llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado\n",
  productManager.getProducts(), "\n")


console.log(
  "Se llamará al método “addProduct” con los mismos campos de arriba, debe arrojar un error porque el código estará repetido.\n",
  productManager.addProduct(
  'producto prueba',
  'Este es un producto prueba',
  200,
  'Sin imagen',
  'abc123',
  25
), "\n")

console.log(
  "Se evaluará que getProductById devuelva error si no encuentra el producto o el producto en caso de encontrarlo\n",
  productManager.getProductById(1),
  "\n",
  productManager.getProductById(4)
)
