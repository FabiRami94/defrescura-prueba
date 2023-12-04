
import styles from './Compras.module.css';
import React, { useState } from 'react';
import { SuccessDeleteCart } from '../../assets/modals/modals.js';
import { FaShoppingCart } from "react-icons/fa";

const Compras = ({ addToCart, cart, setCart }) => {
  const [confirmation, setConfirmation] = useState(false);

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

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleConfirmPurchase = () => {
    setConfirmation(prevConfirmation => !prevConfirmation);
  };

  const renderConfirmationTable = () => {
    return (
      <div>
        <h2>Detalle de la Compra</h2>
        <table className={styles.confirmationTable}>
          <thead>
            <tr>
              <th>Nit</th>
              <th>Cliente</th>
              <th>Sucursal</th>
              <th>Dirección de Entrega</th>
              <th>Contacto</th>
              <th>Forma de Pago</th>
            </tr>
          </thead>
          <tbody>    
              <tr>
                <td>1072******</td>
                <td>Fabián Ramírez</td>
                <td>Sede 1</td>
                <td>Calle siempre viva 123</td>
                <td>3001234567</td>
                <td>Contado</td>
              </tr>
          </tbody>
        </table>
        <hr></hr>
        <table className={styles.confirmationTable}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Unidad de Medida</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.unidadMedida}</td>
                <td>{item.quantity}</td>
                <td>{item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total: {calculateTotal()}</p>
        <button className={styles.GeneralButton} onClick={handleConfirmPurchase }>Atrás</button>
      </div>
    );
  };

  return (
    <div>
      <h1 style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>CARRITO DE COMPRAS</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {cart.length === 0 ? (
          <p style={{ textAlign: 'center' }}>Debes agregar algún producto para poder comprar.</p>
        ) : (
          <>
            {confirmation ? (
              renderConfirmationTable()
            ) : (
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
                        <button className={styles.GeneralButton} onClick={() => increaseQuantity(item.id)}>+</button>
                      </td>
                      <td>{item.price * item.quantity}</td>
                      <td>
                        <button className={styles.GeneralButton} onClick={() => { removeFromCart(item.id); SuccessDeleteCart(); }}>Quitar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </>
        )}
      </div>
      {!confirmation && (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
          <p>Total: {calculateTotal()}</p>
          <button className={styles.GeneralButton} onClick={handleConfirmPurchase}>Confirmar Compra</button>
          <p>Items: <FaShoppingCart /> {cart.length}</p>
        </div>
      )}
    </div>
  );
};

export default Compras;