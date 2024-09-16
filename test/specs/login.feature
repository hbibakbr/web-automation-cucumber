Feature: Functional login of Saucedemo

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see inventory page and title <title>

    Examples:
      | username       | password             | title          |
      | standard_user  | secret_sauce         | Products       |
