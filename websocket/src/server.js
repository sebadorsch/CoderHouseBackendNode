import express from 'express';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.routes.js'
import { Server } from 'socket.io';
import __dirname from './dirname.js';

const PORT = process.env.PORT || 8080
console.log(PORT)

const app = express()
const httpServer = app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))

const io = new Server(httpServer)

app.engine('hbs', handlebars.engine({
  extname: 'hbs',
  defaultLayout: 'main'
}))

app.set('view engine', 'hbs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`))

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', viewsRouter)

const products = [];

io.on("connection", (socket) => {
  console.log('New Client connected');

  socket.emit('total_products', products)

  socket.on('new_product', (data) => {

    const product = {
      title: data.title,
      description: data.description,
      price: data.price,
      thumbnail: data.thumbnail,
      code: data.code,
      stock: data.stock,
      category: data.category,
      status: data.status
    }
    products.push(product);
    io.emit('total_products', products)
  })

  // socket.on('eliminar_producto', (data) => {
  //
  // })
})