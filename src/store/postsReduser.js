import { GET_POSTS } from "./constans";

const initialState = {
  posts: [],
};
const postsReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};
export default postsReduser;


