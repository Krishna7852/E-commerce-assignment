import ProductsActionTypes from './products.types';
import { Products } from '../../services/products.service';
import { ProductDetail } from '../../model/ProductDetail';
const INITIAL_STATE = {
  products: Products,
  error: null,
};

/**
 * 
 * @param item : selected product detail
 * @param list : all products
 * @param flag : wether its for delete or add.
 */
const modifyProducts = (item: ProductDetail, list: any, flag: boolean): any => {
  return list.map((el: any) => {
    return {
      ...el,
      isAdded: item.id === el.id ? flag : el.isAdded,
    } as ProductDetail;
  });
};

/**
 * 
 * @param state - Initial state for productReducer
 * @param action - Action to perform on slected item.
 */
const productReducer = (
  state = INITIAL_STATE,
  action: { type: any; payload: ProductDetail }
) => {
  switch (action.type) {
    case ProductsActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: modifyProducts(action.payload, state.products, true),
        error: null,
      };
    case ProductsActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: modifyProducts(action.payload, state.products, false),
        error: null,
      };
    default:
      return state;
  }
};

export default productReducer;
