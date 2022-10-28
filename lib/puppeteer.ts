// eslint-disable-next-line no-restricted-imports
import puppeteer from "puppeteer";

export const gotoPage = async (url: string) => {
  // browserを立ち上げる
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  // page(tab)を生成する
  const page = await browser.newPage();
  // 特定のURLへ移動する｡
  await page.goto(url);

  return { browser, page };
};
