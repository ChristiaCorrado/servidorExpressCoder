const express = require("express");
const app = express();
const PORT = 8080;
const { Server : IOServer, Socket } = require("socket.io")
const { Server: HttpServer } = require("http")
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const routerAllProductos = require("./routes/allProducts");
const productoID = require("./routes/productID")

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})



app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const server = app.listen(PORT, () => {
  
  console.log(`servidor iniciado en puerto ${server.address().port}`);
});

server.on("error", (req, res) => {
  console.log(`hay un error en ${error}`);
});


app.set('view engine', 'ejs')

app.use(`/productos`, routerAllProductos);

const mensajes = []

const messages = [
  { author: "Juan", text: "¡Hola! ¿Que tal?" },
  { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
  { author: "Ana", text: "¡Genial!" }
];

httpServer.listen(3000, ()=> {console.log('SERVER ON');})

io.on('connect',(socket) => {
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



