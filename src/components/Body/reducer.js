import TYPES from "./types";

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.LOAD_EVENTS: {
      const { events } = action.payload;
      return { ...state, events, isLoading: false };
    }
    case TYPES.SET_IS_LOADING: {
      const { isLoading } = action.payload;
      return { ...state, isLoading };
    }
    default:
      return state;
  }
};

export default reducer;
