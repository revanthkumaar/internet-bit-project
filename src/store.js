import { createStore } from 'redux'
 

export default function configureStore(state){
    return createStore(rootReducer, state)
}