
const getProducts = require('../../controllers/productsControllers/getProducts.js');

const getProductsHandler = async (req, res) => {
    try {
        const allProducts = await getProducts();
        res.status(200).json(allProducts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getProductsHandler;