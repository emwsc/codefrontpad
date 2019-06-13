import { useEffect } from "react";

import dayjs from "dayjs";

import { loadEvents, setIsLoading } from "./actions";

import TimePad from "../../tools/TimePad";
import VK from "../../tools/VK";

export const sortEvents = (a, b) => {
  return dayjs(a.starts_at).unix() - dayjs(b.starts_at).unix();
};

export const useOnLoad = dispatch => {
  useEffect(() => {
    const dispatchLoadEvents = events => {
      dispatch(loadEvents(events));
    };

    async function onLoad() {
      try {
        const timepad = new TimePad();
        const vk = new VK();
        timepad.getEvents(dispatchLoadEvents);
        vk.getEvents(dispatchLoadEvents);
      } catch (error) {
        dispatch(setIsLoading(false));
      }
    }
    onLoad();
  }, []);
};
