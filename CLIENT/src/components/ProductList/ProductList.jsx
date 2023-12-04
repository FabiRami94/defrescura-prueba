
import React, { useState } from 'react';
import styles from "./ProductList.module.css";
import { SuccessAddCart } from '../../assets/modals/modals.js';
import ProductsList from '../../assets/ProductsList.js';

const ProductList = ({ category, addToCart }) => {
  const [selectedProducts, setSelectedProducts] = useState({});

  const handleCheckboxChange = (productId) => {
    setSelectedProducts((prevSelectedProducts) => ({
      ...prevSelectedProducts,
      [productId]: !prevSelectedProducts[productId],
    }));
  };

  const handleAddToCart = () => {
    const selectedProductsToAdd = ProductsList.filter(
      (product) => selectedProducts[product.id]
    );
    addToCart(selectedProductsToAdd);
    SuccessAddCart();
    setSelectedProducts({});
  };

  const filteredProducts = ProductsList.filter(
    (product) => product.categories === category
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {filteredProducts.length === 0 ? (
        <p>No hay productos en la Base de Datos para mostrar en esta categoría.</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Seleccionar</th>
                <th>Id</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Unidad de Medida</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>
                    <input
                      type="checkbox"
                      checked={selectedProducts[product.id] || false}
                      onChange={() => handleCheckboxChange(product.id)}
                    />
                  </td>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td> 
                  <td>{product.unidadMedida}</td>    
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )} 
        <button
          className={styles.GeneralButton}
          onClick={handleAddToCart}>
            Añadir al carrito
        </button>
    </div>
  );
};

export default ProductList;