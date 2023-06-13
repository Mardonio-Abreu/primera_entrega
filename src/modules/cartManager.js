const fs = require('fs');
const Cart = require('./cart');

class CartManager {
    constructor(path){
        this.path = path;
        this.cartArray = [];
        this.cid = 0;

    }

    getCartArray(){
            
        if(fs.existsSync(this.path)){
            let cartArrayJSON = fs.readFileSync(this.path, 'utf-8');
            let cartArray = JSON.parse(cartArrayJSON);
            return cartArray;
        }else{
            console.log("File not found!");
         }}

    writeCartArray(data){
        const jsonData = JSON.stringify(data, null, 2);
        fs.writeFileSync(this.path, jsonData);
    }
    
    createCart(){

        let cartArray = this.getCartArray();
        cartArray.map((cart) => {
          
            if(cart.cid === 0 ){
                const cart = newCart(this.cid++, this.path);
                this.cartArray.push(cart);
                this.writeCartArray(cartArray);
                return ('Cart created!');
            }else{
                const cart = new Cart(cart.id++, this.path);
                this.cartArray.push(cart);
                this.writeCartArray(cartArray);
                return ('Cart created!');
            }
        })
    }

    getCart(cid){
        let cartArray = this.getCartArray();
        cartArray.map((item) => {
            if(item.cid === cid){
                let cart = item.cid.products;
                return cart;
            }else{
                return 'Cart code not found!';
            }
        })
    }

    addProduct(cid, pid){
        let cartArray = this.getCartArray();
        cartArray.map((item) => {
            if(cid === item.cid){
                item.cid.addProduct(pid);
                this.writeCartArray(cartArray);
                console.log(`Product: ${pid} added to cart: ${cid}`);
            }else{
                console.log(`Cart ID: ${cid} not found!`);
            }
        })
    }


}

module.exports = CartManager;


