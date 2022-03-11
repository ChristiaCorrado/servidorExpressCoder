//container import
const Container = require("../container");
const product = new Container();

//express import
const express = require("express");
const routerAllProductos = express.Router();

let allProducts;


const print = () => {
  product.getAll().then(function (res) {
    allProducts = res;
  });
  return allProducts;
};


routerAllProductos.get('/', (req, res) => {
  res.json(print());
});

routerAllProductos.post("/", (req, res) => {
  console.log(req.body);
  product.save(req.body);
  res.json(`Producto agregado`);
});

module.exports = routerAllProductos;
