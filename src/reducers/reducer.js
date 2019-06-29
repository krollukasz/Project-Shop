import { combineReducers } from 'redux';
import basketReducer from './reducerBasket';
import productReducer from './reducerProduct';

const reducer = combineReducers({
  products: productReducer,
  basket: basketReducer
});

export default reducer;
