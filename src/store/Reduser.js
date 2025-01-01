import { SAVE_HEADER } from "./Constans";

const initialState = {
  Header: [],
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_HEADER:
      return {
        ...state,
        Header: [...state.Header, ...action.payload],
      };
  }
};
export default Reducer;
