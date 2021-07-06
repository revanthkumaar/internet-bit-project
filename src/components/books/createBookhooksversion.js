import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as bookActions from '../../actions/bookActions'
import * as userActions from '../../actions/userActions'

const UserComponent = () => {
  const counter = useSelector((state) => state.counter);
  const currentUser = useSelector((state) => state.currentUser);

  const dispatch = useDispatch();

  const user = {
    name: "Revanth",
  };

  useEffect(() => {
    dispatch(userActions.setUser(user));
  }, []);

  return (
    <div className="App">
      {" "}
      {currentUser.loggedIn ? (
        <>
          <h1>
            {" "}
            Hello,
            {currentUser.user.name}{" "}
          </h1>{" "}
          <button onClick={() => dispatch(userActions.logOut())}>
            {" "}
            Logout{" "}
          </button>{" "}
        </>
      ) : (
        <>
          <h1> Login </h1>{" "}
          <button
            onClick={() => dispatch(userActions.setUser(user))}
          >
            {" "}
            Login as Revanth{" "}
          </button>{" "}
        </>
      )}{" "}
      <h1> Counter: {counter} </h1>{" "}
      < button onClick = {
           () => dispatch(bookActions.incrementCount())
      } >
        {" "}
        Increase Counter{" "}
      </button>{" "}
      <button onClick={() => dispatch(bookActions.decrementCount())}>
        {" "}
        Decrease Counter{" "}
      </button>{" "}
    </div>
  );
};

export default UserComponent;
