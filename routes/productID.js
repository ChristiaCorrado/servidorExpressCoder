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

const actualizarProductos = (idBase, actualizacion) => {
  product.getAll().then(function (res) {
    allProducts = res;
    console.log(allProducts);
    const index = allProducts.findIndex(object => {
      return object.id == idBase;
      });
    
    allProducts[index].price = actualizacion.price
    
    product.createArchivo(allProducts)
  });
};


productoID.get('/productos/:num1', (req, res) => {
  res.json(findProduct(req.params.num1) );
});

productoID.put('/productos/:num1', (req, res) => {
    res.json(actualizarProductos(req.params.num1,req.body) );
  });

productoID.delete('/productos/:num1', (req, res) => {

    deleteProductID(req.params.num1);
    

});

module.exports = productoID ;
