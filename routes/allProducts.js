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




routerAllProductos.get('/productos', (req, res) => {
  allProducts = print()

<<<<<<< HEAD
  res.render('allProducts', { allProducts }) 
=======
  res.render(allProducts) 
>>>>>>> 0b2d600a84420c7f826d0bfa07df9fb7b96d5c4d
  
});

routerAllProductos.post("/productos", (req, res) => {
  console.log(req.body);
  product.save(req.body);
<<<<<<< HEAD
  res.render('allProducts', { allProducts })
=======
  res.render()
>>>>>>> 0b2d600a84420c7f826d0bfa07df9fb7b96d5c4d
});

module.exports = routerAllProductos;