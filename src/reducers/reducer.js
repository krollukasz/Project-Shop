import { combineReducers } from 'redux';
import basketReducer from './reducers/basket-reducer';
import productReducer from './reducers/product-reducer';

const reducer = combineReducers({
  products:productReducer,
  basket: basketReducer
});

export default reducer;
