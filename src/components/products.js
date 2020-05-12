import React, { useState } from "react";
import {
  formatCurrency,
  StateContext,
  useGlobalStateContext,
} from "../GlobalContext";
import {
  AddButton,
  Image,
  Price,
  Product,
  Products,
  Title,
} from "../styles/Styles";

const Items = () => {
  const { products, addToCart } = useGlobalStateContext(StateContext);
  const [isToggle, setToggle] = useState(1);

  return (
    <div>
      <Products>
        {products.map((product) => (
          <Product key={product._id}>
            <a href={"#" + product._id}>
              <Image src={product.image} alt={product.title} />
              <Title>{product.title}</Title>
            </a>
            <Price>
              <div>{formatCurrency(product.price)}</div>
            </Price>
            <AddButton onClick={() => addToCart(product)}>
              <p>ADD</p>
            </AddButton>
          </Product>
        ))}
      </Products>
    </div>
  );
};

export default Items;
