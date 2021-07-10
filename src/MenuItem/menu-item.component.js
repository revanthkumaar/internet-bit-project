import React from "react";
import "./menu-item.component.scss";
//import HOC from router functionality
import { withRouter } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match, location }) => {
  return (
    <div className={`${size} menu-item`}
      onClick = {() => history.push(`${match.url}${linkUrl}`)}
    >
      {" "}
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        {" "}
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>{" "}
      </div>{" "}
    </div>
  );
};

export default withRouter(MenuItem); //wrapping a comp inside a HOC
