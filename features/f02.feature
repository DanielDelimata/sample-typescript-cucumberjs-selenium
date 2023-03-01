Feature: F02 Searching – Clearing of searching criteria

  User story:
  * As a user of Customers page
  * I want to be able to clear searching criteria
  * in order to quickly type new criteria

  Acceptance criteria:
  * After clearing, search criteria and summary should be as in the very beginning.

  Scenario Outline: Clearing of searching criteria
    Given the user is on the page
    When the user enters the value "<Search>" in the text-input
    And the user selects value "<Column>" in the drop-down
    And the user sets case sensitivity switch to "<Case>"
    And the user clears filters
    Then the user should see that search criteria are cleared
    And the user should see that the search result summary is as in the very beginning

    Examples:
      | Search    | Column | Case  |
      | Alabaster | Name   | True  |
      | postimex  | Name   | False |
      | postimex  | Name   | True  |
      | 1         | Id     | True  |
      | 2         | Id     | True  |
      | 3         | Id     | True  |
      | 4         | Id     | True  |
      | alabaster | Email  | False |
      | Belfast   | City   | True  |


  Scenario: Sample of undefined steps
    Given the user is on the page
    When the step is undefined and skipped
    Then the next step should be skipped as well
