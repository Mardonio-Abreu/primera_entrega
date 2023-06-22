const {Router} = require('express');
const CartManager = require('../modules/cartManager');
const FILE = './cartData.json'

const cartRouter = Router();
const cartManager = new CartManager(FILE);


cartRouter.post('/api/carts/', (req, res) => {
    let flag = cartManager.createCart();
    res.send(console.log(flag));
});


cartRouter.get('/:cid', (req, res) => {

    let cid = req.params.cid;
    let items = cartManager.getCart(cid);
    res.send(items);
});

cartRouter.post('/:cid/product/:pid', (req, res) => {

    let {cid, pid} = req.body;
    let flag = cartManager.addProduct(cid, pid);
    res.send(flag);

});



module.exports = cartRouter;
