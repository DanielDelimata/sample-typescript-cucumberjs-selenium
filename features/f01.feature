Feature: F01 Searching – Correctness

  User story:
  * As a user of Customers page
  * I want to search by any value
  * in order to easily reach necessary information about customers

  Acceptance criteria:
  * Application should present correct results of searching.
  * Application should display a short summary with the number of displayed customers.
  * Application should show the search criteria which were applied.

  @smoke
  Scenario Outline: Correctness of the results
    Given the user is on the page
    When the user enters the value "<Search>" in the text-input
    And the user selects value "<Column>" in the drop-down
    And the user sets case sensitivity switch to "<Case>"
    Then the user should see that the search results are as follows: "<Result>"

    Examples:
      | Search  | Column | Case  | Result                                                                          |
      | 1       | Id     | False | Id Name Email City 1 Alice alice@company.com Berlin                             |
      | 2       | Id     | False | Id Name Email City 2 Bob info@company.eu Tokyo                                  |
      | 3       | Id     | False | Id Name Email City 3 Charlie contact@placeholder.io Athens                      |
      | company | Email  | False | Id Name Email City 1 Alice alice@company.com Berlin 2 Bob info@company.eu Tokyo |
      | 4       | Id     | False | Id Name Email City                                                              |

  Scenario Outline: Correctness of the search summary and term
    Given the user is on the page
    When the user enters the value "<Search>" in the text-input
    And the user selects value "<Column>" in the drop-down
    And the user sets case sensitivity switch to "<Case>"
    Then the user should see the following result summary "<Summary>"
    And the user should see that the search term is "<searchTerm>"

    Examples:
      | Search      | Column | Case  | Summary                  | searchTerm                                                         |
      | 1           | Id     | True  | Showing 1 of 3 customers | filtered by term \"1\" in Id column with match case.                 |
      | 1           | Id     | False | Showing 1 of 3 customers | filtered by term \"1\" in Id column without match case.              |
      | 4           | Id     | True  | Showing 0 of 3 customers | filtered by term \"4\" in Id column with match case.                 |
      | 4           | Id     | False | Showing 0 of 3 customers | filtered by term \"4\" in Id column without match case.              |
      | Alice       | Name   | True  | Showing 1 of 3 customers | filtered by term \"Alice\" in Name column with match case.           |
      | alice       | Name   | True  | Showing 0 of 3 customers | filtered by term \"alice\" in Name column with match case.           |
      | alice       | Name   | False | Showing 1 of 3 customers | filtered by term \"alice\" in Name column without match case.        |
      | placeholder | Email  | True  | Showing 1 of 3 customers | filtered by term \"placeholder\" in Email column with match case.    |
      | Placeholder | Email  | False | Showing 1 of 3 customers | filtered by term \"Placeholder\" in Email column without match case. |
      | Placeholder | Email  | True  | Showing 0 of 3 customers | filtered by term \"Placeholder\" in Email column with match case.    |
      | Athens      | City   | True  | Showing 1 of 3 customers | filtered by term \"Athens\" in City column with match case.          |
      | athens      | City   | False | Showing 1 of 3 customers | filtered by term \"athens\" in City column without match case.       |
      | athens      | City   | True  | Showing 0 of 3 customers | filtered by term \"athens\" in City column with match case.          |
      | company     | Email  | False | Showing 2 of 3 customers | filtered by term \"company\" in Email column without match case.     |
      | Athens      | City   | True  | wrong expected result    | intentionally incorrect                                              |
