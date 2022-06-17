import { createI18n } from "vue-i18n";
import zh from "./config/zh";
import en from "./config/en";

const messages = {
  en,
  zh,
};

/**
 * 获取语言
 * @returns 首先从缓存里拿，没有的话就用浏览器语言
 */
function localLang() {
  // 读取缓存语言
  const cacheLang = sessionStorage.getItem("lang");
  console.log("缓存语言 = ", cacheLang);
  // 获取浏览器的语言
  const language = (navigator.language || "zh").toLocaleLowerCase();
  console.log("浏览器语言 = ", language);
  // 首先从缓存里拿，没有的话就用浏览器语言
  const localLang = cacheLang || language.split("-")[0] || "zh";
  // 设置缓存
  sessionStorage.setItem("lang", localLang);
  console.log("当前语言 = ", localLang);
  return localLang;
}

const i18n = createI18n({
  // locale: localStorage.getItem("lang") || language.split("-")[0] || "en", // 首先从缓存里拿，没有的话就用浏览器语言，
  locale: localLang(),
  fallbackLocale: "zh", // 设置备用语言
  messages,
});

export default i18n;
