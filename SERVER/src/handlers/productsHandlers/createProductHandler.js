
const createProduct = require("../../controllers/productsControllers/createProduct.js");

const createProductHandler = async (req, res) => {
    try {
      
        const {name, price, categories} = req.body;

        if(!name || !price || !categories){
            throw new Error('Data Missing')}
      
        const newProduct = await createProduct({name, price, categories});
      
        res.status(201).json({newProduct});

    } catch (error) {

      return res.status(400).json(error.message);

    }
  };
  
  module.exports = createProductHandler;
  