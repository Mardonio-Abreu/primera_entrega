const CartManager = require('../src/modules/cart');
const FILE = './data.json';
const ID = 1;

const cartManager = new CartManager(ID, FILE);

cartManager.addProduct(1);
cartManager.addProduct(1);
cartManager.addProduct(2);
console.log(cartManager.getCart());