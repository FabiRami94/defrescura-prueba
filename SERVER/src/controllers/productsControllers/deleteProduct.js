
const { Product } = require('../../db.js');

const deleteProduct = async (productId) => {
        
        const existingProduct = await Product.findByPk(productId);

        if (!existingProduct) {
            throw new Error('Producto no encontrado');
        }
        
        await existingProduct.destroy();

        return true;
};

module.exports = deleteProduct;