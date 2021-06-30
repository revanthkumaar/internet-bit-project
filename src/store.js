import { applyMiddleware, createStore } from 'redux'
import bookReducer from './reducers/bookReducer'

import { createLogger } from 'redux-logger'

const logger = createLogger({
    //options
});

export default function configureStore(state){
    return createStore(bookReducer,state,applyMiddleware(logger))
}