const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Index Page Tests', function() {
    let driver;

    this.timeout(60000);

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

    it('should have the correct form fields', async function() {
        await driver.get('https://kaspertonsgaardmerkle.github.io/Hackathon-Challenge/index.html');
        const nameField = await driver.findElement(By.id('username'));
        const emailField = await driver.findElement(By.id('email'));
        assert.ok(nameField);
        assert.ok(emailField);
    });

    it('should submit the form successfully on index page', async function() {
        await driver.get('https://kaspertonsgaardmerkle.github.io/Hackathon-Challenge/index.html');
        await driver.findElement(By.id('username')).sendKeys('Test User');
        await driver.findElement(By.id('email')).sendKeys('test@example.com');
        await driver.findElement(By.css('form')).submit();
        const alert = await driver.switchTo().alert();
        const alertText = await alert.getText();
        assert.strictEqual(alertText, 'this was a useless form, but thank you very much anyway');
        await alert.accept();
    });

    it('should have only one submit button on the form', async function() {
        await driver.get('https://kaspertonsgaardmerkle.github.io/Hackathon-Challenge/index.html');
        const submitButtons = await driver.findElements(By.css('button[type="submit"]'));
        assert.strictEqual(submitButtons.length, 1);
    });
});