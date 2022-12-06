const fs = require('fs')

class ProductManager {

  constructor(path) {
    if (!path)
      console.log('Error: Missing path')
    else {
      this.path = path
      fs.existsSync(path)
        ? this.products = JSON.parse(fs.readFileSync(path, 'utf-8'))
        : this.products = []
    }
  }

  async addProduct(title, description, price, thumbnail, code, stock){
    try{
      if(arguments.length !== 6)
        return 'Error: Invalid amount of arguments'

      fs.existsSync(this.path)
        ? this.products = JSON.parse(fs.readFileSync(this.path, 'utf-8'))
        : this.products = []

      if(this.products.find(e => e.code === code))
        return 'Error: Product already exists!'

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
      await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, '\t'))
      return product
    }
    catch(error){
      console.log(error)
    }
  }

  async getProducts(){
    return this.products
  }

  async getProductById(id){
    try{
      return JSON.parse(await fs.promises.readFile(this.path, 'utf-8'))
        .find(e => e.id === id) || "Error: Not found"
    }
    catch (error){
      console.log(error)
    }
  }

  async updateProduct(id, obj){
    try{
      if(!id || !this.products.find(e => e.id === id))
        return "Error: id not found"
      else if (Object.keys(obj).some(value => {return ['id', 'code'].includes(value)}))
        return "Error: Not Allowed"
      else{
        let updatedProduct = this.products.find(e => e.id === id)
        Object.keys(obj).map(key=>updatedProduct[key] = obj[key])

        this.products = this.products.filter(e => e.id !== id)
        this.products.push(updatedProduct)

        await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, '\t'))
        return "Product updated successfully!"
      }
    }
    catch(error){
      console.log(error)
    }
  }

  async deleteProduct(id){
    if(!id || !this.products.find(e => e.id === id))
      return "Error: id not found"
    else {
      let products = this.products.filter(e => e.id !== id)
      await fs.promises.writeFile(this.path, JSON.stringify(products, null, '\t'))
      return "Product deleted successfully"
    }
  }
}

/** Testing **/

const productManager = new ProductManager('./Products.json')

// productManager.getProducts()
//   .then(data => console.log(data))
//   .catch(()=>console.log('error........'))

// productManager.addProduct()
//   .then(data => console.log(data))
//   .catch(()=>console.log('error........'))

productManager.addProduct(
  'producto prueba',
  'Este es otro producto prueba',
  200,
  'Sin imagen',
  'abc12345',
  25
).then(data => console.log(data))
  .catch(()=>console.log('error........'))

// productManager.getProductById(1)
//   .then(data => console.log(data))
//   .catch(()=>console.log('error........'))
//
// productManager.updateProduct(1, {"title": "producto prueba reemplazo", "stock": 30})
//   .then(data => console.log(data))
//   .catch(()=>console.log('error........'))
//
// productManager.deleteProduct(1)
//   .then(data => console.log(data))
//   .catch(()=>console.log('error........'))