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
  allProducts = print()

  res.render('formulario', { allProducts }) 
  
});

routerAllProductos.post("/", (req, res) => {
  console.log(req.body);
  product.save(req.body);
  res.render('formulario', { allProducts })
});

module.exports = routerAllProductos;
