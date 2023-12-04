
const { Product } = require('../../db.js');

const getProducts = async () => {

        const products = await Product.findAll();

        if(products.length < 1){
                throw new Error('No hay ningún producto!')
        }

        return products;
};

module.exports = getProducts;