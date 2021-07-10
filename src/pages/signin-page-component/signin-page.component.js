import React from "react";
import {withRouter} from "react-router-dom"

const SignInPage = ({match}) => {
  console.log("checking the match value in signin comp" );
  console.log(match)
  //functional component of React
  return (
    <div className="SignInPage">
      <p> This is the signin page component </p>
    </div>
  );
};

export default withRouter(SignInPage);
