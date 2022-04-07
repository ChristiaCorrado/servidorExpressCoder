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






module.exports = routerAllProductos;