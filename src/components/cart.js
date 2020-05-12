import React from "react";
import { StateContext, useGlobalStateContext } from "../GlobalContext";
import { CartItems } from "../styles/Styles";

/**
 *
 * @returns {*}
 * @constructor
 */
export const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    checkOut,
    showCheckout,
  } = useGlobalStateContext(StateContext);
  return (
    <>
      <div>
        {cartItems.length === 0 ? (
          <CartItems>Cart is empty</CartItems>
        ) : (
          <CartItems>Items: {cartItems.length}</CartItems>
        )}
      </div>
      <div>
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              <div>
                <img
                  style={{ height: "50px" }}
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div>
                <div>{item.title}</div>
                <div>{item.price}</div>
                <div>{item.count}</div>
                <button onClick={() => removeFromCart(item)}>remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {cartItems.length !== 0 && (
        <div>
          <div>
            <div>
              Total: {cartItems.reduce((a, c) => a + c.price * c.count, 0)}
            </div>
            <button onClick={() => showCheckout()}>Proceed</button>
          </div>
        </div>
      )}
      {checkOut === true && <div>CHECKOUT</div>}
    </>
  );
};
