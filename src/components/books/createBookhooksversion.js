import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import allActions from './actions/index.js'

const createBook = () => {
  const counter = useSelector(state => state.counter)
     const currentUser =

     const dispatch = useDispatch();

     const user = {name: 'revanth'}

     return (

          <div className="createBook-hooks">
                    <h1> Counter: {counter}</h1>
               <button onClick = {allActions.counterActions.incrementCount()}></button>
          </div>

     )





}
