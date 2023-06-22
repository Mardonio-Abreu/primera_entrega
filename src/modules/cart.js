//Class that creates the shopping carts
class Cart {
    constructor(cid){
                
        this.cid = id;
        this.products = [];
    }

    getProducts(){
        return this.products;
    }

    addProduct(pid){

        this.products.map((product) => {
            if(product.pid === pid){
                product.quantity++;
                return console.log("1 more product added!");
            }else{
                this.products.push({pid: pid, quantity: 1});
                return console.log("Product added!");
            }

            })

       

    }
}

module.exports = Cart;