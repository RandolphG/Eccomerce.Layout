import React, { createContext, useReducer, useContext, useEffect } from "react";
import data from "./data.json";
import App from "./App";

/* initial state */
const initialState = {
  products: data.products,
  size: "",
  sortProduct: "",
  count: data.products.length,
  cartItems: [],
  inCart: false,
  checkout: false,
};

/* actions */
const actions = {
  DEFAULT: "DEFAULT",
  FORMAT_CURRENCY: "FORMAT_CURRENCY",
  SET_SIZE: "SET_SIZE",
  SET_SORT: "SET_SORT",
  SET_PRODUCTS: "SET_PRODUCTS",
  ADD_TO_CART: "ADD_TO_CART",
  CHECKOUT: "CHECKOUT",
};

/**
 * format currency
 */
export const formatCurrency = (num) => {
  return `$${Number(num).toLocaleString()} `;
};

/**
 * sort products
 * @param sort
 */
export const sortProducts = (sort) => {
  console.log(sort.target.value);
};

/**
 * filter products
 * @param products
 */
export const filterProducts = (size) => {
  console.log(size.target.value);
};

/**
 * global reducer
 * @param state
 * @param action
 * @returns {{sort: *}}
 * @constructor
 */
const reducer = (state, action) => {
  console.log(
    `--> ACTION TYPE : ${action.type} | STATE : `,
    action.event,
    `<--`
  );
  switch (action.type) {
    /* set size */
    case actions.SET_SIZE:
      return { ...state, size: action.payload };
    case actions.SET_SORT:
      return { ...state, sortProduct: action.sortProduct };
    /* set products*/
    case actions.SET_PRODUCTS:
      return {
        ...state,
        products: data.products.filter((item) => item.id !== action.id),
      };
    // reducer actions : add items to cart
    case actions.ADD_TO_CART:
      return {
        ...state,
        cartItems: action.cartItems,
      };
    // reducer actions : add items to cart
    case actions.CHECKOUT:
      return { ...state, checkout: true };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

/**
 * global provider
 * @param children
 * @returns {*}
 * @constructor
 */
function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    inCart: state.inCart,
    products: state.products,
    size: state.size,
    sortProduct: state.sortProduct,
    count: state.count,
    cartItems: state.cartItems,
    checkout: state.checkout,
    formatCurrency: formatCurrency(),
    filterProducts: (e) => {
      console.log(e);
      if (e.target.value === "") {
        dispatch({ type: actions.SET_SIZE, size: e.target.value });
        dispatch({ type: actions.SET_PRODUCTS, products: state.products });
      } else {
        dispatch({ type: actions.SET_SIZE, size: e.target.value });
        dispatch({
          type: actions.SET_PRODUCTS,
          payload: e,
        });
      }
    },
    sortProducts: (e) => {
      const sort = e.target.value;
      console.log(`event:`, sort);
      dispatch({ type: actions.SET_SORT, sortProduct: sort });
    },
    /* add items to cart */
    addToCart: (product) => {
      console.log(`product added:`, product);
      const cartItems = state.cartItems.slice();
      let inCart = false;

      cartItems.forEach((item) => {
        if (item._id === product._id) {
          item.count++;
          inCart = true;
        }
      });
      if (!inCart) {
        cartItems.push({ ...product, count: 1 });
      }
      dispatch({ type: actions.ADD_TO_CART, cartItems });
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    /*remove from cart*/
    removeFromCart: (product) => {
      console.log(`product removed:`, product);
      const cartItems = state.cartItems.slice();

      dispatch({
        type: actions.ADD_TO_CART,
        cartItems: cartItems.filter((x) => x._id !== product._id),
      });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(cartItems.filter((x) => x._id !== product._id))
      );
    },
    /* proceed to checkout*/
    showCheckout: () => {
      console.log(state.checkout);
      dispatch({ type: actions.CHECKOUT });
    },
  };

  useEffect(() => {
    console.log(` GLOBAL PROVIDER MOUNTED`);
    dispatch({
      type: actions.ADD_TO_CART,
      cartItems: JSON.parse(localStorage.getItem("cartItems"))
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    });
  }, []);

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
}

/**
 * global context fir entire app
 * @returns {*}
 * @constructor
 */
export default function GlobalContext() {
  return (
    <GlobalProvider>
      <App />
    </GlobalProvider>
  );
}

/* context */
export const StateContext = createContext();

/* global hooks */
export const useGlobalStateContext = () => useContext(StateContext);
