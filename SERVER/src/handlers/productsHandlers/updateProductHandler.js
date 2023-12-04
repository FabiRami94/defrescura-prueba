
const updateProduct = require('../../controllers/productsControllers/updateProduct.js');

const updateProductHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const { name, price, categories } = req.body;

        if ( !name || !price || !categories) {
            throw new Error('ID del producto o datos de actualización no proporcionados');
        }
        const productUpdate = await updateProduct({id}, { name, price, categories });

        res.status(200).json(productUpdate);
    } catch (error) {
        res.status(400).json({error: error.message });
    }
};

module.exports = updateProductHandler;