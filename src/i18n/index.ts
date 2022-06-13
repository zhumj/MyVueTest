import { createI18n } from "vue-i18n";
import zh from "./config/zh";
import en from "./config/en";

const messages = {
  en,
  zh,
};
const language = (navigator.language || "en").toLocaleLowerCase(); // 这是获取浏览器的语言
console.log("当前语言：%s", language.split("-")[0]);
const i18n = createI18n({
  locale: localStorage.getItem("lang") || language.split("-")[0] || "en", // 首先从缓存里拿，没有的话就用浏览器语言，
  fallbackLocale: "en", // 设置备用语言
  messages,
});

export default i18n;
