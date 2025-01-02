import { GET_CATEGORIES, GET_POSTS } from "./constans";

const initialState = {
  categories: [],
  posts: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categoriec: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
