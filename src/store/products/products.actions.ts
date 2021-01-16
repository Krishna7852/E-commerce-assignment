import ProductsActionTypes from "./products.types";
/**
 * Actions for Products
 */
export const getProducts = () => ({
  type: ProductsActionTypes.GET_PRODUCTS,
});

export const AddProduct = (prod: any) => ({
  type: ProductsActionTypes.ADD_PRODUCT,
  payload: prod,
});

export const RemoveProduct = (prod: any) => ({
  type: ProductsActionTypes.REMOVE_PRODUCT,
  payload: prod,
});

