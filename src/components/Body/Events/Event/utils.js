import sanitizeHtml from "sanitize-html";

export const toReadableDate = date => new Date(date).toLocaleString();

const replaceNbsps = str => {
  var re = new RegExp(String.fromCharCode(160), "g");
  return str.replace(re, " ");
};

const removeEmptyTags = str =>
  str.replace(/<[^/>][^>]*>[\s]*<\/[^>]+>/gim, "").trim();

export const sanitaze = html => ({
  __html: html
    ? sanitizeHtml(removeEmptyTags(replaceNbsps(html)), {
        nonTextTags: ["img"]
      })
    : null
});
