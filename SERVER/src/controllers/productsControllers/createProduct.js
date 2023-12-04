
const { Product } = require('../../db.js');

const createProduct = async ({name, price, categories}) => {
  
    const existingProduct = await Product.findOne({
      where: { name }
    });

    if (existingProduct) {
        throw new Error({error: 'El producto ya existe en la base de datos'})
    }

    const newProduct = await Product.create({name, price, categories});

    return newProduct;
};

module.exports = createProduct;