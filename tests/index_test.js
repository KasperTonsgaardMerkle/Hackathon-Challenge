const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Index Page Tests', function() {
    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    after(async function() {
        await driver.quit();
    });

    it('should have the correct title', async function() {
        await driver.get('https://kaspertonsgaardmerkle.github.io/Hackathon-Challenge/index.html');
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Welcome to the Hackathon Challenge');
    });

    it('should have a working navigation bar', async function() {
        await driver.get('https://kaspertonsgaardmerkle.github.io/Hackathon-Challenge/index.html');
        const navLinks = await driver.findElements(By.css('nav ul li a'));
        assert.strictEqual(navLinks.length, 4);
    });

    it('should highlight the active link', async function() {
        await driver.get('https://kaspertonsgaardmerkle.github.io/Hackathon-Challenge/index.html');
        const activeLink = await driver.findElement(By.css('nav ul li a[href="index.html"]'));
        const color = await activeLink.getCssValue('background-color');
        assert.strictEqual(color, 'rgba(38, 70, 166, 1)');
    });
});