import { useState } from 'react';

import './CartItem.css';

function CartItem(props) {
  const { product } = props;
  const { name, price } = product;
  const [ quantity, setQuantity ] = useState(1);
  const total = price * quantity;
  // const [ total, setTotal ] = useState(price * quantity);

  function handleMinus() {
    if (quantity > 0) {
      setQuantity((qty) => qty - 1);
    }
  }

  function handlePlus() {
    setQuantity((qty) => qty + 1);
  }

  return (
    <div className="CartItem">
      <div>{name}</div>
      <div>
        <button onClick={handleMinus}>-</button>
        {quantity}
        <button onClick={(handlePlus)}>+</button>
      </div>
      <div>{total}€</div>
    </div>
  ); 
}

export default CartItem;
