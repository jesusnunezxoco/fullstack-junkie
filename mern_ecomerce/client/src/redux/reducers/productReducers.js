import * as a from "../constants/productConstants";

export const getProductsReudcer = (state = { products: [] }, action) => {
  switch (action.type) {
    case a.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case a.GET_PRODUCTS_SUCCESS:
      return undefined;
    case a.GET_PRODUCTS_FAIL:
      return undefined;
    default:
      return state;
  }
};
