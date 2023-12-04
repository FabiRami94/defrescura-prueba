
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = ({ category, addToCart }) => {
  
    const [products, setProducts] = useState([]);

  useEffect(() => {
    
    axios.get('/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        throw new Error('Error al obtener la lista de productos:', error);
      });
  }, []); 

  
  const filteredProducts = products.filter(product => product.categories === category);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {filteredProducts.length === 0 ? (
        <p>No hay productos en la Base de Datos para mostrar en esta categoría.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map(product => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => addToCart(product)}>Añadir al carrito</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProductList;