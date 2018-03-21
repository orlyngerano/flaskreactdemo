import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ProfileReducer from '../reducers/ProfileReducer';

const appReducer = combineReducers({ ProfileReducer });


let AppStore = createStore(
    appReducer,
    applyMiddleware(thunk)
);

export default AppStore;