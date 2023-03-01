import { WebDriver, By } from 'selenium-webdriver';
import { ApplicationPage } from './ApplicationPage';
import { driver } from '../support/hook';

export class CustomersPage extends ApplicationPage {
    private clickToClearFiltersButton = By.id('clear-button');

    private searchInput = By.id('search-input');

    private searchColumn = By.id('search-column');

    private matchCase = By.id('match-case');

    private summary = By.id('table-resume');

    private searchTerm = By.id('search-slogan');

    private searchResultsTable = By.xpath("//table");

    constructor() {
        super(driver);
    }

    /**
     * Click on Clear Filters Button.
     *
     * @return the CustomersPage class instance.
     */
    clickClearFiltersButton = async () => {
        await this.driver.findElement(this.clickToClearFiltersButton).click();
        return this;
    };

    /**
     * Set value to searchInput field.
     *
     * @param input String which should be typed into the field
     * @return the CustomersPage class instance.
     */
    setSearchInput = async (input: string) => {
        await this.driver.findElement(this.searchInput).sendKeys(input);
        return this;
    };

    /**
     * Set value to Search Column Drop Down List field.
     *
     * @param value String which should match with one of values visible on the
     * dropdown
     * @return the CustomersPage class instance.
     */
    selectSearchColumnByText = async (value: string) => {
        await this.driver.findElement(
            By.xpath(`//select[@id='search-column']/option[text()='${value}']`))
            .click();
        return this;
    }

    /**
     * Set Match Case Checkbox field to required value.
     *
     * @param value boolean value of the checkbox status true - checked,
     * false - unchecked
     * @return the CustomersPage class instance.
     */
    setMatchCaseCheckboxField = async (value: boolean) => {
        const checkboxState = await this.driver.findElement(this.matchCase).isSelected();
        if (checkboxState !== value) {
            await this.driver.findElement(this.matchCase).click();
        }
        return this;
    };

    getSummaryText = async () => {
        return await this.driver.findElement(this.summary)
            .getText();
    };

    getSearchTermText = async () => {
        return await this.driver.findElement(this.searchTerm)
            .getText();
    };

    getSearchInputText = async () => {
        return await this.driver.findElement(this.searchInput)
            .getText();
    };

    getSearchResultsTableText = async () => {
        return await this.driver.findElement(this.searchResultsTable)
            .getText();
    };

    open = async () => {
        const pageUrl: string = "https://danieldelimata.github.io/sample-page/";
        await this.driver.get(pageUrl);
    };
}
