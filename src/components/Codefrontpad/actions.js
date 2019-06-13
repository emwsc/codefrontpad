import TYPES from "./types";

export const loadEvents = events => ({
  type: TYPES.LOAD_EVENTS,
  payload: { events }
});

export const setIsLoading = isLoading => ({
  type: TYPES.SET_IS_LOADING,
  payload: { isLoading }
});

export const setIsSettingsVisible = isSettingsVisibile => ({
  type: TYPES.SET_IS_SETTINGS_VISIBILE,
  payload: { isSettingsVisibile }
});

export const removeKeyword = keyword => ({
  type: TYPES.REMOVE_KEYWORD,
  payload: { keyword }
});

export const addKeyword = keyword => ({
  type: TYPES.ADD_KEYWORD,
  payload: { keyword }
});

export const clearEvents = () => ({ type: TYPES.CLEAR_EVENTS });
