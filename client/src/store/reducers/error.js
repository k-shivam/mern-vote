import {ADD_ERROR, REMOVE_EROR} from '../actionTypes';


export default (state={message:null}, action) => {
    switch(action.type){
        case ADD_ERROR:
            return {...state, message: action.error};

        case REMOVE_EROR:
            return {...state, message:null};

        default:
            return state;
    }
};