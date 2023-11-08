//Cart manager
const fs = require('fs');
const Cart = require('./cart');

class CartManager {
    
    constructor(path){
        this.path = path;
        this.createFile();
                       
    }

    
    createFile () {
        let cartArray = [];
        const jsonData = JSON.stringify(cartArray, null, 2);
        fs.writeFileSync(this.path, jsonData);
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
                
            if(cartArray.length === 0 ){
                const cart = new Cart(1);
                cartArray.unshift(cart);
                this.writeCartArray(cartArray);
                return 'Cart created!';
            }else{
                const lastItem =cartArray[cartArray.length - 1];
                const cart = new Cart(lastItem.cid++);
                cartArray.unshift(cart);
                this.writeCartArray(cartArray);
                return 'Cart created!';
            }
            
        
    }

    getCart(cid){
        const cartArray = this.getCartArray();
        const item  = cartArray.find(item => item.cid === cid);
        const index = cartArray.indexOf(item);
            if(index !== -1){
                console.log("Surprise MotherFather")
                const cartProducts = cartArray[index].products;
                return cartProducts;
            }else{
                return 'Cart code not found!';
            }
        
    }

    addProduct(cid, pid){
        const cartArray = this.getCartArray();
        const item  = cartArray.find(item => item.cid === cid);
        const index = cartArray.indexOf(item);
        if (index !== -1){
            const itemPid = cartArray[index].products.find(item => item.pid === pid);
            const itemPidIndex = cartArray[index].products.indexOf(itemPid);
            if (itemPidIndex !== -1){
                    cartArray[index].products[itemPidIndex].quantity++;
                    this.writeCartArray(cartArray);
                    console.log(`Product: ${pid} added to cart: ${cid}`);
                }else{
                    cartArray[index].products.push({pid:pid, quantity: 1});
                    this.writeCartArray(cartArray);
                    console.log(`Product: ${pid} added to cart: ${cid}`);
                }
            }else{
            console.log(`Cart ID: ${cid} not found!`);
       }    

            
                    
}}



module.exports = CartManager;


