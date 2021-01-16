import { CombinedState, combineReducers, Reducer } from "redux";
import { RootStore } from "./RootStore";
import productReducer from "./products/products.reducer";

const rootReducer: Reducer<CombinedState<RootStore>> = combineReducers<
  RootStore
>({
  detail: productReducer
});

export default rootReducer;
