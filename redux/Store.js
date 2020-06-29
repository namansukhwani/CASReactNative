import {createStore,applyMiddleware,combineReducers} from 'redux';
import {} from 'react-native';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {user} from './user';

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            user
        }),
        applyMiddleware(thunk,logger)
    );

    return store;
}