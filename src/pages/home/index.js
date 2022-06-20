import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import data from "../../data.json";

const Home = () => {
  return (
    <div className="navList">
      {data.map((item) => (
        <Link to={"/".concat(item.path)}>{item.titleform}</Link>
      ))}
    </div>
  );
};

export default Home;
