const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Contact Page Tests', function() {
  let driver;

  this.timeout(60000);

  before(async function() {
      driver = await new Builder().forBrowser('chrome').build();
  });

  after(async function() {
    driver.quit();
  });

  it('should have the correct title', async function() {
    await driver.get('https://kaspertonsgaardmerkle.github.io/Hackathon-Challenge/contact.html');
    const title = await driver.getTitle();
    assert.strictEqual(title, 'Contact');
  });

  it('should have a working navigation bar', async function() {
    await driver.get('https://kaspertonsgaardmerkle.github.io/Hackathon-Challenge/contact.html');
    const navLinks = await driver.findElements(By.css('nav ul li a'));
    assert.strictEqual(navLinks.length, 4);
  });

  it('should have a contact form with all fields', async function() {
    await driver.get('https://kaspertonsgaardmerkle.github.io/Hackathon-Challenge/contact.html');
    const nameField = await driver.findElement(By.id('name'));
    const emailField = await driver.findElement(By.id('email'));
    const messageField = await driver.findElement(By.id('message'));
    assert.ok(nameField);
    assert.ok(emailField);
    assert.ok(messageField);
  });

  it('should submit the contact form successfully', async function() {
    await driver.get('https://kaspertonsgaardmerkle.github.io/Hackathon-Challenge/contact.html');
    await driver.findElement(By.id('name')).sendKeys('Test User');
    await driver.findElement(By.id('email')).sendKeys('test@example.com');
    await driver.findElement(By.id('message')).sendKeys('This is a test message.');
    await driver.findElement(By.css('form button[type="submit"]')).click();
    const alert = await driver.switchTo().alert();
    const alertText = await alert.getText();
    assert.strictEqual(alertText, 'Thank you for your message! We will get back to you soon.');
    await alert.accept();
  });

  it('should highlight the active link', async function() {
    await driver.get('https://kaspertonsgaardmerkle.github.io/Hackathon-Challenge/contact.html');
    const activeLink = await driver.findElement(By.css('nav ul li a[href="contact.html"]'));
    const color = await activeLink.getCssValue('background-color');
    assert.strictEqual(color, 'rgba(38, 70, 166, 1)');
  });
});
