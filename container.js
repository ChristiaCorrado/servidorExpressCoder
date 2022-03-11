const fs = require("fs");

class Container {

    constructor (tittle,price,thumbnail){
        this.tittle = tittle;
        this.price = price;
        this.thumbnail = thumbnail;
    }


  async  createArchivo (e) {
      try{
          await fs.promises.writeFile('./productos.txt', JSON.stringify(e))
          console.log('nuevo archivo creado')
      }
      catch(err){

      }
  }


  async  getAll(){
      try{
          let productObtenidos = JSON.parse(await fs.promises.readFile(`./productos.txt`,'utf-8'))
          return productObtenidos
      }
      catch(err){
          console.log('error de lectura', err)
      }
  }


  async  addProduct(articulo) {
      try{
          await fs.promises.writeFile('./productos.txt',JSON.stringify(articulo))
          console.log('Productos Grabados')
      }
      catch(err){
          console.log('error al grabar')
      }
  }


  async save(addNewProduct){
      try{
          let  productObtenidos =  JSON.parse(await fs.promises.readFile(`./productos.txt`,'utf-8'))
          let lastID = 0
          productObtenidos.forEach(e => {
              lastID = e.id
              return lastID++;
          });            
          addNewProduct.id = `${lastID}`
          productObtenidos.push(addNewProduct)            
          await fs.promises.writeFile('./productos.txt',JSON.stringify(productObtenidos))
          console.log('productos actualizados')
      }
      catch(err){
          console.log('error de lectura', err)
      }

  }

  async  deleteById(id){
      try{
          let productActualizados = await JSON.parse(await fs.promises.readFile(`./productos.txt`,'utf-8'))

          productActualizados.splice(id,1," ")

          await save(productActualizados)

      }
      catch(err){

      }
  }

  async  deleteAll(){
      try{
          await fs.promises.writeFile('./productos.txt','')
          console.log('nuevo archivo creado')
      }
      catch(err){

      }
  }


}

module.exports = Container