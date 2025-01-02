import React, { useEffect } from "react";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory } from "../../store/categoryAction";

const Header = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.categoriec);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <div className="header">
      <div className="header__name">
        <div className="header__vertical">The</div>
        <div className="header__horizontal">Unicode</div>
      </div>
      <div className="header__button">
        {category?.map((article) => (
          <button className="title">{article?.title}</button>
        ))}
      </div>
      <div className="header__border"></div>
    </div>
  );
};

export default Header;
