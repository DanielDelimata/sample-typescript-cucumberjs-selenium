import { WebDriver } from 'selenium-webdriver';

export abstract class ApplicationPage {
    protected readonly driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }
}