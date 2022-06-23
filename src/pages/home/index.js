import React from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";

const Home = () => {
  return (
    <div className="container">
      <div className="links">
        {data?.map((item) => (
          <Link className="button" key={item.path} to={"/".concat(item.path)}>{item.titleform}</Link>
        ))}
      </div>

    </div>
  );
};

export default Home;
