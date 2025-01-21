import { createStore, applyMiddleware } from 'redux'; // todo: replace createStore with configureStore
import { thunk } from 'redux-thunk';
import reducer from '../reducers/reducer';

const middlewares = [thunk];

const store = createStore(reducer, applyMiddleware(...middlewares));
export default store;
