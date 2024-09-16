@regression
Feature: Login Functional Tests Saucedemo

  @positive
  Scenario: As a user, I can log into the saucedemo products area

    Given I am on the login page
    When I login with valid credentials
    Then I should be on the inventory page and see the page title
  
  @negative
  Scenario Outline: As a user, I cannot log into the saucedemo with <username> and <password>
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see an error message: <message>

    Examples:
      | username       | password             | message                                                                    |
      | invalid_user   | secret_sauce         | Epic sadface: Username and password do not match any user in this service  |
      | standard_user  | invalid_sauce        | Epic sadface: Username and password do not match any user in this service  |