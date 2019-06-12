import TYPES from "./types";

export const loadEvents = events => ({
  type: TYPES.LOAD_EVENTS,
  payload: { events }
});

export const setIsLoading = isLoading => ({
  type: TYPES.SET_IS_LOADING,
  payload: { isLoading }
});
