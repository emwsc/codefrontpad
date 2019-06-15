import { BASE_API_URL, MONTHS } from "./constants";

const now = new Date();

class VK {
  /**
   * Разбираем посты на предмем следующего митапа PITERJS
   * @param {string} text Пост на стене ВК
   * @param {string} id ИД поста
   */
  parseWallPostText = (text, id) => {
    const eventRegExp = /Следующий митап (PiterJS(\s*)#(\d){2,})/gim;
    const urlRegExp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gim;
    const dateRegExp = new RegExp(`\\d{1,2}\\s(${MONTHS.join("|")})`, "gim");

    const eventRegExpMatch = eventRegExp.exec(text);
    if (!eventRegExpMatch) return null;

    const name = eventRegExpMatch[1];

    const result = {
      id,
      name,
      description_short: text
    };

    const urlRegExpMatch = urlRegExp.exec(text);
    if (urlRegExpMatch) {
      const [url] = urlRegExpMatch;
      result.url = url;
    }

    const dateRegExpMatch = dateRegExp.exec(text);
    if (dateRegExpMatch) {
      const [dateString] = dateRegExpMatch;
      const [day, month] = dateString.split(" ");
      result.starts_at = new Date(
        now.getFullYear(),
        MONTHS.indexOf(month),
        day,
        19,
        0
      );
    }
    return result;
  };

  /**
   * Получить события из группы piterjs с vk.ru
   * @param {function} dispatchLoadEvents Фукнция для сохранения полученых событий
   */
  getEvents = async dispatchLoadEvents => {
    try {
      const results = await fetch(BASE_API_URL);
      const { response } = await results.json();
      const events = response.items
        .map(item => this.parseWallPostText(item.text, item.id))
        .filter(item => item);
      dispatchLoadEvents(events);
    } catch (error) {
      console.log("vk getEvents:");
      console.log(error);
      dispatchLoadEvents([]);
    }
  };
}

export default VK;
