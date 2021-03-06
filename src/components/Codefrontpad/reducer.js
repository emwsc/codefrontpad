import TYPES from "./types";
import { sortEvents, saveKeywords } from "./utils";

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.LOAD_EVENTS: {
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
    case TYPES.SET_IS_SETTINGS_VISIBILE: {
      const { isSettingsVisibile } = action.payload;
      return { ...state, isSettingsVisibile };
    }
    case TYPES.SET_IS_LOADING: {
      const { isLoading } = action.payload;
      return { ...state, isLoading };
    }
    case TYPES.ADD_KEYWORD: {
      const keywords = [...state.keywords, action.payload.keyword];
      saveKeywords(keywords);
      return {
        ...state,
        keywords
      };
    }
    case TYPES.REMOVE_KEYWORD: {
      const keywords = state.keywords.filter(x => x !== action.payload.keyword);
      saveKeywords(keywords);
      return {
        ...state,
        keywords
      };
    }
    case TYPES.CLEAR_EVENTS: {
      return { ...state, events: [] };
    }
    default:
      return state;
  }
};

export default reducer;
