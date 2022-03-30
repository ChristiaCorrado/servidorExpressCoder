//container import
const Container = require("../container");
const product = new Container();

//express import
const express = require("express");
const productoID = express.Router();

let allProducts
let productoFiltrado = []
let productoBorrado = []

const findProduct = (idBuscado) => {
    product.getAll().then(function (res) {
      allProducts = res;
      console.log(allProducts);
      productoFiltrado = allProducts.filter((e) => { return e.id == idBuscado } )
      console.log(productoFiltrado);
    });
    return productoFiltrado;
};


const deleteProductID = (idBuscado) => {
    product.getAll().then(function (res) {
      allProducts = res;
      console.log(allProducts);
      const index = allProducts.findIndex(object => {
        return object.id == idBuscado;
        });
      console.log(index);
      allProducts.splice(index,1," ")
      console.log(allProducts);
      product.createArchivo(allProducts)
    });
    return productoBorrado;
};


productoID.get('/:num1', (req, res) => {
  res.json(findProduct(req.params.num1) );
});

productoID.put('/:num1', (req, res) => {
    res.json(findProduct(req.params.num1) );
  });

productoID.delete('/:num1', (req, res) => {

    deleteProductID(req.params.num1);
    
    res.render('formulario', { allProducts })
});

module.exports = productoID ;
