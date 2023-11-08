//Cart routes
const {Router} = require('express');
const CartManager = require('../modules/cartManager');
const FILE = './cartData.json'

const cartRouter = Router();
const cartManager = new CartManager(FILE);


cartRouter.post('/api/carts/', (req, res) => {
    flag = cartManager.createCart();
    res.send(console.log(flag));
});


cartRouter.get('/api/carts/:cid', (req, res) => {

    let cid = parseInt(req.params.cid);
    let items = cartManager.getCart(cid);
    res.send(items);
});

cartRouter.post('/api/carts/:cid/product/:pid', (req, res) => {

    let cid = parseInt(req.params.cid);
    let pid = parseInt(req.params.pid);
    let flag = cartManager.addProduct(cid, pid);
    res.send(flag);

});



module.exports = cartRouter;
