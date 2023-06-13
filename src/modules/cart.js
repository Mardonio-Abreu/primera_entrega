//Class that manages the shopping carts
const fs = require('fs');
class Cart {
    constructor(id, path){
                
        this.id = id;
        this.path = path;
        this.products = [];

        this.createFile(this.path);
    }

    getFile (){
            
        if(fs.existsSync(this.path)){
            let catalogueJSON = fs.readFileSync(this.path, 'utf-8');
            let catalogue = JSON.parse(catalogueJSON);
            return catalogue;
        }else{
            console.log("File not found!");
         }
    }

    writeFile(data){
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(this.path, jsonData);
    }

    createFile () {
        const cartItems = [];
        const jsonData = JSON.stringify(cartItems, null, 2);
        fs.writeFileSync(this.path, jsonData);
    }

    getCart(){
            
        if(fs.existsSync(this.path)){
            let cartJSON = fs.readFileSync(this.path, 'utf-8');
            let cart = JSON.parse(cartJSON);
            return cart;
        }else{
            console.log("File not found!");
         }}

    addProduct(id){

        this.products.map((product) => {
            if(product.id === id){
                product.quantity++;
                return console.log("1 more product added!");
            }else{
                this.products.push({id: id, quantity: 1});
                return console.log("Product added!");
            }

            this.writeFile(this.products);
        })

       

    }
}

module.exports = Cart;