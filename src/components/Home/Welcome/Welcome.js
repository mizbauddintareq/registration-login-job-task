import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="container">
      <h2>Empty Page</h2>
      <Link to="/">
        <input type="submit" value="Back to home" />
      </Link>
    </div>
  );
};

export default Welcome;
