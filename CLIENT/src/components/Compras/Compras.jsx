
import styles from './Compras.module.css';
import React from 'react';
import {SuccessDeleteCart} from '../../assets/modals/modals.js';

const Compras = ({addToCart, cart, setCart}) => {
  
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div>
      <h1 style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>CARRITO DE COMPRAS</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {cart.length === 0 ? (
          <p style={{ textAlign: 'center' }}>Debes agregar algún producto para poder comprar.</p>
        ) : (
          <>
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Total</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <button className={styles.GeneralButton} onClick={() => decreaseQuantity(item.id)}>-</button>
                      {item.quantity}
                      <button className={styles.GeneralButton} onClick={() => addToCart(item)}>+</button>
                    </td>
                    <td>{item.price * item.quantity}</td>
                    <td>
                      <button className={styles.GeneralButton} onClick={() => {removeFromCart(item.id), SuccessDeleteCart()}}>Quitar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <p>Total: {calculateTotal()}</p>
          <button className={styles.GeneralButton}>Confirmar Compra</button>
        </div>
    </div>
  );
};

export default Compras;