import * as ActionTypes from './ActionTypes';

export const user=(state=false,action)=>{
    switch(action.type)
    {
        case ActionTypes.USER_LOGIN:
            state=true;
            return state;
        default:
            return state;
    }
}