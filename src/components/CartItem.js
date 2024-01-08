/* eslint-disable linebreak-style */
import React from 'react';

export const CartItem = ({ product }) => {
  return (
    <li>
      <span className="img" role="img">{product.emoji}</span>
      <div className="info">
        <span className="quantity">X{product.quantity}</span>
        <span className="sum">{product.price * product.quantity}:-</span>
      </div>
      <span className="actions">
        <button type="button" onClick={() => { }}>-</button>
        <button type="button" onClick={() => { }}>+</button>
      </span>
    </li>
  )
}
