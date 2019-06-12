import TYPES from "./types";
import { sortEvents } from "./utils";

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.LOAD_EVENTS: {
      debugger;
      const { events: nextEvents } = action.payload;
      const { events: prevEvents } = state;

      const eventsObject = {};
      prevEvents.concat(nextEvents).forEach(event => {
        if (!eventsObject[event.id])
          eventsObject[event.id] = {
            ...event
          };
      });
      const events = Object.keys(eventsObject)
        .map(key => eventsObject[key])
        .sort(sortEvents);

      return {
        ...state,
        events,
        isLoading: false
      };
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
