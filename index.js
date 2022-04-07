const express = require("express");
const app = express();
const PORT = 8080;
const { Server : IOServer, Socket } = require("socket.io")
const { Server: HttpServer } = require("http")
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const routerAllProductos = require("./routes/allProducts");
const productoID = require("./routes/productID")
const cart = require("./routes/cart")

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})



app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.set('view engine', 'ejs')

const mensajes = []

const messages = [
  { author: "Juan", text: "¡Hola! ¿Que tal?" },
  { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
  { author: "Ana", text: "¡Genial!" }
];

//httpServer.listen(3000, ()=> {console.log('SERVER ON');})
const connectedServer = httpServer.listen(PORT, () => {
  console.log(`Servidor http con socket escuchando en el puerto ${connectedServer.address().port}`)
})
connectedServer.on('error',(error) => {console.log(`error: ${error.message}`)}) 

io.on('connection',(socket) => {
  console.log('SE CONECTO UN USUARIO');
  socket.emit('messages', messages)
    
  socket.on('mensaje', (data)=>{
    mensajes.push(data)
    console.log(mensajes)
    io.sockets.emit(mensajes)
  })
  
  socket.on('new-message',data => {
    messages.push(data);
    io.sockets.emit('messages', messages);
});


})



