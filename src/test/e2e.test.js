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
});
