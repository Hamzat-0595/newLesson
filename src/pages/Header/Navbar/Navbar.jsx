import React, { useEffect } from "react";
import "./Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../../store/categoryAction";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.categoriec);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div className="navbar">
      {category?.map((article) => (
        <Link to={`/category/${article._id}`}>
          <button className="title">{article?.title}</button>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
