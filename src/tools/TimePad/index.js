import { TIMEPAD_EVENTS_API_URL, KEYWORDS } from "./constants";

class TimePad {
  _getEvents = async keyword => {
    const results = await fetch(TIMEPAD_EVENTS_API_URL + keyword);
    const json = await results.json();
    return json.values;
  };

  /**
   * Получить события по ключевым словам с timepad.ru
   * @param {function} dispatchLoadEvents Фукнция для сохранения полученых событий
   * @param {string[]} keywords
   */
  getEvents = async (dispatchLoadEvents, keywords) => {
    try {
      keywords.forEach(async keyword => {
        const eventsForKeyWord = await this._getEvents(keyword);
        const events = eventsForKeyWord.map(event => ({
          ...event,
          starts_at: new Date(event.starts_at)
        }));
        dispatchLoadEvents(events);
      });
    } catch (error) {
      console.log("timepad getEvents:");
      console.log(error);
      dispatchLoadEvents([]);
    }
  };
}

export default TimePad;
