import assert from 'assert';
import { Given, Then, When } from '@cucumber/cucumber';
import { CustomersPage } from '../page_objects/customersPage';

let customersPage: CustomersPage;
let searchSummaryAtVeryBeginning: string;

Given('the user is on the page',
    async function () {
        customersPage = new CustomersPage();
        customersPage.open();
        searchSummaryAtVeryBeginning = await customersPage.getSummaryText();
    });

When('the user enters the value {string} in the text-input',
    async function (value: string) {
        await customersPage.setSearchInput(value);
    });

When('the user selects value {string} in the drop-down',
    async function (value: string) {
        await customersPage.selectSearchColumnByText(value);
    });

When('the user sets case sensitivity switch to {string}',
    async function (isCaseSensitive: string) {
        let booleanValue: boolean = isCaseSensitive.toLowerCase() === 'true';
        await customersPage.setMatchCaseCheckboxField(booleanValue);
    });

Then('the user should see the following result summary {string}',
    async function (expectedSummary: string) {
        assert.strictEqual(
            await customersPage.getSummaryText(),
            expectedSummary);
    });

Then('the user should see that the search term is {string}',
    async function (expectedTerm: string) {
        let searchTerm: string = await customersPage.getSearchTermText();
        assert.ok(searchTerm.startsWith(expectedTerm),
            "Actual should starts with expected."
            + "\nActual: " + searchTerm
            + "\nExpected: " + expectedTerm);
    });

When('the user clears filters',
    async function () {
        await customersPage.clickClearFiltersButton();
    });

Then('the user should see that search criteria are cleared',
    async function () {
        assert.strictEqual(await customersPage.getSearchInputText(), "");
    });

Then('the user should see that the search result summary is as in the very beginning',
    async function () {
        assert.strictEqual(await customersPage.getSummaryText(),
            searchSummaryAtVeryBeginning);
    });

Then('the user should see that the search results are as follows: {string}',
    async function (expectedResults: string) {
        let resultText: string
            = await customersPage.getSearchResultsTableText();
        assert.strictEqual(
            resultText
                .replace(/(\s+)/gm, " ")
                .trim(),
            expectedResults);
    }); 
