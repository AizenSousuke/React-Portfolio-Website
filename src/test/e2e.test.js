/* End2End Testing */
import puppeteer from "puppeteer";
import data from "../components/data/data.json";

describe("App.js", () => {
	let browser;
	let page;

	beforeAll(async () => {
		browser = await puppeteer.launch();
		page = await browser.newPage();
	});

	it("contains the welcome message", async () => {
		await page.goto("http://localhost:3000");
		await page.waitForSelector("#welcomeMessage");
		const text = await page.$eval("#welcomeMessage", (e) => e.textContent);
		expect(text).toContain(data.subtitle);
	});

	it("goes to about page by using the button on the home page", async () => {
		await page.waitForSelector("a.button");
		await page.click("a.button");
		const text = await page.$eval("#root > div > div:nth-child(1) > div.column.is-one-third > div > div:nth-child(1) > div > div > h2", el => el.textContent);
		expect(text).toContain("Nik");
	});
});
