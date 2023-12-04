
const deleteProduct = require('../../controllers/productsControllers/deleteProduct.js');

const deleteProductHandler = async (req, res) => {

    try {
        const productId = req.params.id;

        if (!productId) {
            throw new Error('ID del producto no proporcionado');
        }

        const productEliminate = await deleteProduct(productId);

        res.status(200).json(productEliminate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = deleteProductHandler;