import "./HomePages.scss";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fethPosts } from "../../store/postAction";

const HomePages = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fethPosts());
  }, [dispatch]);
  if (posts?.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper">
      <div className="pages">
        <div className="pages__left">
          <img className="pages__img0" src={posts?.[0]?.image} />
          <div className="content">
            <div className="pages__name">
              {posts?.[0]?.title.substring(0, 20) + "..."}
            </div>
            <div className="pages__text">
              {posts?.[0]?.text.substring(0, 20) + "..."}
            </div>
          </div>
        </div>
        <div className="pages__right">
          <div className="container">
            <img className="pages__img1" src={posts?.[1]?.image} />
            <div className="content">
              <div className="pages__name1">
                {posts?.[1]?.title.substring(0, 20) + "..."}
              </div>
              <div className="pages__text1">
                {posts?.[1]?.text.substring(0, 20) + "..."}
              </div>
            </div>
          </div>
          <div className="container__botom">
            <img className="pages__img2" src={posts?.[2]?.image} />
            <div className="content">
              <div className="pages__name2">
                {posts?.[2]?.title.substring(0, 20) + "..."}
              </div>
              <div className="pages__text2">
                {posts?.[2]?.text.substring(0, 20) + "..."}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pages__border"></div>
      <h1>Последние новости в мире IT</h1>
      <div className="itNew">
        <div className="itNew__wrapper">
          <img className="itNew__img1" src={posts?.[3]?.image} />
          <div className="pages__name3">
            {posts?.[3]?.title.substring(0, 20) + "..."}
          </div>
          <div className="pages__text3">
            {posts?.[3]?.text.substring(0, 20) + "..."}
          </div>
        </div>
        <div className="itNew__wrapper2">
          <img className="itNew__img2" src={posts?.[4]?.image} />
          <div className="pages__name4">
            {posts?.[4]?.title.substring(0, 20) + "..."}
          </div>
          <div className="pages__text4">
            {posts?.[4]?.text.substring(0, 20) + "....."}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePages;
