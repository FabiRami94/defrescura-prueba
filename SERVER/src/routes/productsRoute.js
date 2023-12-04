
const {Router} = require('express');
const productsRoute = Router();
const createProductHandler = require('../handlers/productsHandlers/createProductHandler.js');
const getProductsHandler = require('../handlers/productsHandlers/getProductsHandler.js');
const updateProductHandler = require('../handlers/productsHandlers/updateProductHandler.js');
const deleteProductHandler = require('../handlers/productsHandlers/deleteProductHandler.js');

productsRoute.post('/', createProductHandler);

productsRoute.get('/', getProductsHandler);

productsRoute.put('/:id', updateProductHandler);

productsRoute.delete('/:id', deleteProductHandler);

module.exports = productsRoute;