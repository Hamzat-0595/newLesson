import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Header.scss";

const src = "https://zelim-blog.onrender.com/categories";

const Header = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(src).then((data) => {
      setArticles(data.data);
    });
    if (!articles) {
      return <div>Loading...</div>;
    }
  });
  return (
    <div className="header">
      <div className="header__name">
        <div className="header__vertical">The</div>
        <div className="header__horizontal">Unicode</div>
      </div>
      <div className="header__button">
        {articles?.map((article) => (
          <button className="title">{article.title}</button>
        ))}
      </div>
      <div className="header__border"></div>
    </div>
  );
};

export default Header;
