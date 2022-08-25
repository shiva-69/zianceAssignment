import {SET_USER} from "./Action";

export const Reducer = (store  ={},{type, payload}) => {
    switch(type) {
        case SET_USER :
            return {
                ...store, payload
            }
            default :
            return store;
    }
}