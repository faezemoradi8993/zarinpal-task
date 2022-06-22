import React from "react";
import { Link } from "react-router-dom";
import data from "../../data.json";
import { useSelector } from 'react-redux'

const Home = () => {
  const { products, loading, error } = useSelector(state => state.products)
  const { users, loading: userLoading, error: userError } = useSelector(state => state.users)
  return (
    <div className="container">
      <div className="box">
        <h2>
          لیست افراد
        </h2>
        {userLoading === "pending" ? "users are loading" : userError ? userError : users?.map((user, index) => <p key={index}>{user?.fullname}</p>)}
      </div>
      <div className="box">
        <h2>
          لیست محصولات
        </h2>
        {loading === "pending" ? "products are loading" : error ? userError : products?.map((p, index) => <p key={index}>{p?.productname} {p?.count} عدد</p>
        )}
      </div>
      <div className="links">
        {data?.map((item) => (
          <Link className="button" key={item.path} to={"/".concat(item.path)}>{item.titleform}</Link>
        ))}
      </div>

    </div>
  );
};

export default Home;
