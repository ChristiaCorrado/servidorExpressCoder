//container import
const Container = require("../container");
const product = new Container();

//express import
const express = require("express");
const cart = express.Router();

let allProducts
let productoFiltrado = []
let productoBorrado = []
let allCart = [] 

const crearCart = (cart) => {
    id = Math.floor(Math.random() * (100-1 + 1)) + 1;
    console.log(id);
    let timestamp = Date.now()

    let myNewCart = {
        'id' : id,
        'timestamp': timestamp,
        'productos':{
            cart
        } 
    }

    allCart.push(myNewCart); 
    return allCart
}

const deleteArticle = (id) => {
    console.log(allCart);
    actualizarCart = allCart.cart
    const index = actualizarCart.findIndex(object => {
        return object.id == id;
        });
      console.log(index);
      allCart.cart.splice(index)
      console.log(allCart);
}

const deleteCart = (id) => {
    
    const index = allCart.findIndex(object => {
        return object.id == id;
        });
      console.log(index);
      allCart[1].splice(index)
      console.log(allCart);
}



cart.post("/cart", (req, res) => {

    allCart = crearCart(req.body)
    console.log(allCart);
    res.json(allCart)
  });


cart.delete("/cart/:id", (req, res) => {
    deleteCart(req.params.id)
    res.json(allCart)
})

cart.get('/cart/:id/productos')


module.exports = cart ;