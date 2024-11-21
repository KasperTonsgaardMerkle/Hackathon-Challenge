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
        await driver.get('file://' + __dirname + '/../index.html');
        const title = await driver.getTitle();
        assert.strictEqual(title, 'Welcome to the Hackathon Challenge');
    });

    it('should have a working navigation bar', async function() {
        await driver.get('file://' + __dirname + '/../index.html');
        const navLinks = await driver.findElements(By.css('nav ul li a'));
        assert.strictEqual(navLinks.length, 4);
    });

    it('should have a disabled submit button in the form', async function() {
        await driver.get('file://' + __dirname + '/../index.html');
        const submitButton = await driver.findElement(By.css('form button[type="submit"]'));
        const isDisabled = await submitButton.getAttribute('disabled');
        assert.strictEqual(isDisabled, 'true');
    });

    it('should enable the submit button when email is entered', async function() {
        await driver.get('file://' + __dirname + '/../index.html');
        const emailInput = await driver.findElement(By.id('email'));
        await emailInput.sendKeys('test@example.com');
        const submitButton = await driver.findElement(By.css('form button[type="submit"]'));
        const isDisabled = await submitButton.getAttribute('disabled');
        assert.strictEqual(isDisabled, 'true');
    });
});