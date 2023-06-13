const {Router} = require('express');
const CartManager = require('../modules/cartManager');
const FILE = './carts.json'

const cartRouter = Router();
const cartManager = new CartManager();


cartRouter.post('/api/carts/', (req, res) => {
    let flag = cartManager.createCart();
    res.send(flag);
});


cartRouter.get('/api/carts/:cid', (req, res) => {

    let cid = req.params.cid;
    let items = cartManager.getCart(cid);
    res.send(items);
});

cartRouter.post('/api/carts/:cid/product/:pid', (req, res) => {

    let {cid, pid} = req.body;
    let flag = cartManager.addProduct(cid, pid);
    res.send(flag);

});



module.exports = cartRouter;
