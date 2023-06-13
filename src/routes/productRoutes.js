const {Router} = require('express');
const ProductManager = require('../modules/productManager');
const FILE = './data.json'

const router = Router();
const catalogue = new ProductManager(FILE);

router.get('/api/products', (req, res) => {

    const items = catalogue.getProducts();

    res.send({
        statusCode: 200,
        payload: items
    });

});

    router.get('/api/products/:pid', (req, res) => {

        let strId = req.params.pid;
        let  id = parseInt(strId);

        const items = catalogue.getProductsById(id);

        res.send({
            statusCode: 200,
            payload: items
        });

    });

    router.delete('/api/products/:pid', (req, res) => {

        let strId = req.body.id;
        let  pid = parseInt(strId);
        const items = catalogue.deleteProduct(pid);

        res.send({
            statusCode: 200,
            payload: items
        });

    });

    router.put('/api/products/:pid', (req, res) => {

        let strId = req.body.id;
        let  id = parseInt(strId);
        const field = req.body.field;
        const fieldValue = req.body.fieldValue;
        
        const items = catalogue.updateProduct(id, field, fieldValue);

        res.send({
            statusCode: 200,
            payload: items
        });

    });

    router.post('/api/products/:pid', (req, res) => {

        const items = catalogue.addProduct(req.body.title, req.body.description, req.body.code, req.body.price, req.body.stats, req.body.stock, req.body.category, req.body.thumbnails);

        res.send({
            statusCode: 200,
            payload: items
        });

    });

    


module.exports = router;
