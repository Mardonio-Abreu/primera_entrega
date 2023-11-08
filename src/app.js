//Main
const express = require('express');
const app = new express();
const productRouter = require('./routes/productRoutes');
const cartRouter = require('./routes/cartRoutes');
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`The server is running in port ${PORT} "UwU"`);
});

app.use(productRouter);
app.use(cartRouter);
