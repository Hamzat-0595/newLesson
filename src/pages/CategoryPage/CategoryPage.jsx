import axios from "axios";
import "./CategoryPage.scss";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const baseURL = "https://zelim-blog.onrender.com/posts/category";

export default function CategoryPage() {
  const [post, setPost] = useState(null);

  const { _id } = useParams();

  useEffect(() => {
    setPost(null);
    axios.get(`${baseURL}/${_id}`).then((response) => {
      setPost(response.data);
    });
  }, [_id]);

  if (!post) {
    return "Нет поста!";
  }
  return (
    <div className="wrapper">
      <div className="category">
        <div className="container__top">
          <img className="category__image" src={post?.[0]?.image} />
          <div className="category__title">{post?.[0]?.title}</div>
          <div className="category__text">{post?.[0]?.text}</div>
        </div>
        <div className="container__top">
          <img className="category__image" src={post?.[1]?.image} />
          <div className="category__title">{post?.[1]?.title}</div>
          <div className="category__text">{post?.[1]?.text}</div>
        </div>
        <div className="container__top">
          <img className="category__image" src={post?.[2]?.image} />
          <div className="category__title">{post?.[2]?.title}</div>
          <div className="category__text">{post?.[2]?.text}</div>
        </div>
      </div>
      <div className="recommendations">
        <div className="container__top">
          <img className="category__image" src={post?.[1]?.image} />
          <div className="category__title">{post?.[1]?.title}</div>
          <div className="category__text">{post?.[1]?.text}</div>
        </div>
        <div className="container__top">
          <img className="category__image" src={post?.[2]?.image} />
          <div className="category__title">{post?.[2]?.title}</div>
          <div className="category__text">{post?.[2]?.text}</div>
        </div>
      </div>
    </div>
  );
}
