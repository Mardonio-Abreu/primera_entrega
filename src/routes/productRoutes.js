const {Router} = require('express');
const ProductManager = require('../modules/productManager');
const FILE = './data.json'

const productRouter = Router();
const catalogue = new ProductManager(FILE);

productRouter.get('/api/products/', (req, res) => {

    const items = catalogue.getProducts();

    res.send({
        statusCode: 200,
        payload: items
    });

});

    productRouter.get('/api/products/:pid', (req, res) => {

        let strId = req.params.pid;
        let  id = parseInt(strId);

        const items = catalogue.getProductsById(id);

        res.send({
            statusCode: 200,
            payload: items
        });

    });

    productRouter.delete('/api/products/:pid', (req, res) => {

        let strId = req.params.pid;
        let  pid = parseInt(strId);
        const items = catalogue.deleteProduct(pid);

        res.send({
            statusCode: 200,
            payload: items
        });

    });

    productRouter.put('/api/products/:pid', (req, res) => {

        const pid = req.body.id;
        const field = req.body.field;
        const fieldValue = req.body.fieldValue;
        
        const items = catalogue.updateProduct(pid, field, fieldValue);

        res.send({
            statusCode: 200,
            payload: items
        });

    });

    productRouter.post('/api/products/', (req, res) => {

        const items = catalogue.addProduct(req.body.title, req.body.description, req.body.code, req.body.price, req.body.stats, req.body.stock, req.body.category, req.body.thumbnails);

        res.send({
            statusCode: 200,
            payload: items
        });

    });

    


module.exports = productRouter;
