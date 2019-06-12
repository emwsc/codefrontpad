import { useEffect } from "react";

import dayjs from "dayjs";

import { EVENTS_URL, KEYWORDS } from "./constants";
import { loadEvents, setIsLoading } from "./actions";

const retrieveEvents = async keyword => {
  const results = await fetch(EVENTS_URL + keyword);
  const json = await results.json();
  return json.values;
};

const keywordExists = (str, keyword) => {
  const regExp = new RegExp(keyword, "gmi");
  return regExp.test(str);
};

const sortEvents = (a, b) => {
  return dayjs(a.starts_at).unix() - dayjs(b.starts_at).unix();
};

export const useOnLoad = dispatch => {
  useEffect(() => {
    async function onLoad() {
      try {
        const eventsObject = {};
        KEYWORDS.forEach(async keyword => {
          const eventsForKeyWord = await retrieveEvents(keyword);
          eventsForKeyWord.forEach(event => {
            if (
              !eventsObject[event.id] &&
              keywordExists(event.description_html)
            )
              eventsObject[event.id] = {
                ...event,
                starts_at: new Date(event.starts_at)
              };
          });
          const events = Object.keys(eventsObject).map(
            key => eventsObject[key]
          );
          events.sort(sortEvents);
          dispatch(loadEvents(events));
        });
      } catch (error) {
        dispatch(setIsLoading(false));
      }
    }
    onLoad();
  }, []);
};
