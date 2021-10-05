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
		const text = await page.$eval(
			"#root > div > div:nth-child(1) > div.column.is-one-third > div > div:nth-child(1) > div > div > h2",
			(el) => el.textContent
		);
		expect(text).toContain("Nik");
	});

	it("goes to projects page and shows all the projects as user scrolls", async () => {
		await page.waitForSelector(
			"#root > nav > div > span:nth-child(2) > div > a"
		);
		await page.click("#root > nav > div > span:nth-child(2) > div > a");
		const projectsTitle = await page.$eval(
			"#root > div > div > div.column.is-one-third-desktop.is-three-quarters-tablet > div.hero-body.title.is-1.has-text-centered.is-uppercase",
			(el) => el.textContent
		);
		expect(projectsTitle.toUpperCase()).toContain("PROJECTS");

		await page.evaluate(
			() =>
				new Promise((resolve) => {
					var scrollTop = -1;
					const interval = setInterval(() => {
						window.scrollBy(0, 100);
						if (document.documentElement.scrollTop !== scrollTop) {
							scrollTop = document.documentElement.scrollTop;
							return;
						}
						clearInterval(interval);
						resolve();
					}, 10);
				})
		);

		const numberOfProjects = (await page.$$("#root > div > div > div.column.is-one-third-desktop.is-three-quarters-tablet > div.tile.is-ancestor.is-vertical > div > div")).length;

		expect(numberOfProjects).toEqual(data.projects.length);
	});
});
