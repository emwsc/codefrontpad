import { useEffect } from "react";

import dayjs from "dayjs";

import { DEFAULT_KEYWORDS } from "./constants";

import { loadEvents, setIsLoading, clearEvents } from "./actions";

import TimePad from "../../tools/TimePad";
import VK from "../../tools/VK";

export const getSavesKeywords = () => {
  const savedKeywordsJSON = window.localStorage["savedKeywordsJSON"];
  if (!savedKeywordsJSON) return DEFAULT_KEYWORDS;
  return JSON.parse(savedKeywordsJSON);
};

export const sortEvents = (a, b) => {
  return dayjs(a.starts_at).unix() - dayjs(b.starts_at).unix();
};

export const useGetEvents = (dispatch, keywords) => {
  useEffect(() => {
    const dispatchLoadEvents = events => {
      dispatch(loadEvents(events));
    };

    async function onLoad() {
      try {
        const timepad = new TimePad();
        const vk = new VK();
        timepad.getEvents(dispatchLoadEvents, keywords);
        vk.getEvents(dispatchLoadEvents);
      } catch (error) {
        dispatch(setIsLoading(false));
      }
    }
    dispatch(clearEvents());
    onLoad();
  }, [keywords]);
};
