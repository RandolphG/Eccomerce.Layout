import React from "react";
import {
  FilterResults,
  FilterSize,
  FilterSort,
  ProductInfoBar,
} from "../styles/Styles";
import { StateContext, useGlobalStateContext } from "../GlobalContext";

/**
 *
 * @returns {*}
 * @constructor
 */
const Filter = () => {
  /* sort and size */
  const {
    count,
    size,
    sortProduct,
    sortProducts,
    filterProducts,
  } = useGlobalStateContext(StateContext);
  return (
    <ProductInfoBar>
      <FilterResults>Products: {count}</FilterResults>
      <FilterSort>
        Order
        <select value={sortProduct} onChange={(event) => sortProducts(event)}>
          <option>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">Highest</option>
        </select>
      </FilterSort>
      <FilterSize>
        Filter
        <select value={size} onChange={(event) => filterProducts(event)}>
          <option value="">All</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </FilterSize>
    </ProductInfoBar>
  );
};

export default Filter;
