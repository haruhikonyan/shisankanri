// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { gotoPage } from "../../lib/puppeteer";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { browser, page } = await gotoPage(
    "https://entry11.bk.mufg.jp/ibg/dfw/APLIN/loginib/login?_TRANID=AG004_001"
  );

  await page.type("#tx-branch-number", "000");
  await page.type("#tx-account-number", "000");
  await page.type("#tx-ib-password", "hoge");

  await page.click(
    "body > div.body-wrap > main > form > section > div > div > div.form-area-form > div.bottom-nav > div > button"
  );
  await page.waitForSelector(
    "body > div.body-wrap > main > form > section > div > div.col-7 > div > div.card-body > section.see-others.hoverable > div.open-text"
  );
  await page.click(
    "body > div.body-wrap > main > form > section > div > div.col-7 > div > div.card-body > section.see-others.hoverable > div.open-text"
  );
  await page.waitForTimeout(5000);
  await page.screenshot({ path: "output/itiran.png", fullPage: true });
  // browserを閉じる

  await browser.close();

  res.status(200).json({ name: "John Doe" });
}
