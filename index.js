const express = require("express");
const app = express();
const routerAllProductos = require("./routes/allProducts");
const productoID = require("./routes/productID")
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(`/api/productos`, routerAllProductos);

app.use(`/api/productos`, productoID);


const server = app.listen(PORT, () => {
  
  console.log(`servidor iniciado en puerto ${server.address().port}`);
});

server.on("error", (req, res) => {
  console.log(`hay un error en ${error}`);
});
