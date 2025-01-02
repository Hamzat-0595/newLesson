import { GET_CATEGORIES } from "./constans";

const initialState = {
  categories: [],
};

const categoryReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categoriec: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReduser;
