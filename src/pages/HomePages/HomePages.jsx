import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePages.scss";

const src = "https://zelim-blog.onrender.com/posts";

const HomePages = () => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    axios.get(src).then((data) => {
      setArticles(data.data);
    });
  });
  if (!articles) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <div className="pages">
        <div className="pages__left">
          <img className="pages__img0" src={articles[0].image} />
          <div className="content__name">
            {articles[0].title.substring(0, 20) + "..."}
          </div>
          <div className="content__text">
            {articles[0].text.substring(0, 20) + "..."}
          </div>
        </div>
        <div className="content__right">
          <div>
            <img className="pages__img1" src={articles[1].image} />
            <div className="content__name1">
              {articles[1].title.substring(0, 20) + "..."}
            </div>
            <div className="content__text1">
              {articles[1].text.substring(0, 20) + "..."}
            </div>
          </div>
          <div>
            <img className="pages__img2" src={articles[2].image} />
            <div className="content__name2">
              {articles[2].title.substring(0, 20) + "..."}
            </div>
            <div className="content__text2">
              {articles[2].text.substring(0, 20) + "..."}
            </div>
          </div>
        </div>
      </div>
      <div className="pages__border"></div>
      <h1>Последние новости в мире IT</h1>
      <div className="itNew">
        <div className="itNew__wrapper">
          <img className="itNew__img1" src={articles[3].image} />
          <div className="itNew__wrapper-Content">
            <div className="content__name3">
              {articles[3].title.substring(0, 20) + "..."}
            </div>
            <div className="content__text3">
              {articles[3].text.substring(0, 20) + "..."}
            </div>
          </div>
        </div>
        <div className="itNew__wrapper2">
          <img className="itNew__img2" src={articles[4].image} />
          <div className="content__name4">
            {articles[4].title.substring(0, 20) + "..."}
          </div>
          <div className="content__text4">
            {articles[4].text.substring(0, 20) + "..."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
