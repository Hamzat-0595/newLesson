import axios from "axios";
import { GET_CATEGORIES } from "./constans";

export const fetchCategory = () => {
  return (dispatch) => {
    axios
    
      .get("https://zelim-blog.onrender.com/categories")
      .then((response) => response.data)
      .then((data) => dispatch(addCategoryAction(data)));
  };
};
export const addCategoryAction = (payload) => ({
  type: GET_CATEGORIES,
  payload,
});
