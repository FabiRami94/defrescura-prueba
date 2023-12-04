
const { Product } = require('../../db.js');

const updateProduct = async ({id}, { name, price, categories }) => {
    
        const existingProduct = await Product.findByPk(id);

        if (!existingProduct) {
            throw new Error('Producto no encontrado');
        }

        await existingProduct.update({name, price, categories});

        return true;
};

module.exports = updateProduct;