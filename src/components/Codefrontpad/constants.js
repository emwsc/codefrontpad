import { getSavesKeywords } from "./utils";

export const DEFAULT_KEYWORDS = [
  "js",
  "react",
  "node",
  "nodejs",
  "vue",
  "angular",
  "frontend",
  "фронтенд",
  "БЭМ",
  "webpack"
];

export const INITIAL_STATE = {
  events: [],
  isSettingsVisibile: false,
  isLoading: true,
  keywords: getSavesKeywords()
};
