import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./actions/index.js";

const createBook = () => {
  const counter = useSelector((state) => state.counter);
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch(); //initializing dispatcher from this comp
  const user = { name: "revanth" };

  //creating a side effect
  useEffect(() => {
       
  }, []);


  return (
    <div className="createBook-hooks">

         {
              currentUser.loggedIn ? 

              <>
                    <h1> Hello, {currentUser.name}  </h1>

                    <button onClick={() => dispatch(allActions.userActions.logOut())}>Log out</button>
              </>
         }



      <h1> Counter: {counter}</h1>
      <button onClick={allActions.counterActions.incrementCount()}></button>
    </div>
  );
};
