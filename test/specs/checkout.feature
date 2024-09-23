@regression
Feature: Checkout Functional Test Saucedemo
    As a user,
    I have a sauce labs backpack on the cart
    and I want to checkout and finish order sauce labs backpack product

    @positive
    Scenario: As a user, I can checkout an item from the cart page
        Given I am on cart page
        Given I already have an item to checkout from the cart
        When I click checkout an product
        Then I should be on the checkout page
    
    @positive
    Scenario: As a user, I can continue place an order checkout product
        Given I am on the checkout page
        When I am providing firstname: <firstname>, lastname: <lastname>, and postal code: <postal>
        When I click continue button
        Then I should be on the overview page

        Examples:
        | firstname | lastname | postal |
        | Tester    | Akbar    | 1123   |
    
    @positive
    Scenario: As a user, I can finish order an product
        Given I am on the overview page
        When I click finish button
        Then I successful order sauce labs backpack

        Examples:
        | firstname | lastname | postal |
        | Tester    | Akbar    | 1123   |
    
    @negative
    Scenario Outline: As a user, I can't continue checkout an product because empty first name
        Given I am on inventory page
        Given I add a product to the cart
        Given I access the cart page
        When I click checkout an product
        When I am providing empty firstname: , lastname: <lastname>, and postal code: <postal>
        When I click continue button
        Then I should see error message: <message>
    
        Examples:
            | firstname | lastname | postal | message                                 | 
            | Tester    | Akbar    | 1123   | Error: First Name is required           |


    @negative
    Scenario Outline: As a user, I can't continue checkout an product because empty last name
        Given I am clear input data value
        When I am providing firstname: <firstname> , empty lastname: , and postal code: <postal>
        When I click continue button
        Then I should see error message: <message>

        Examples:
            | firstname | lastname | postal | message                                 | 
            | Tester    | Akbar    | 1123   | Error: Last Name is required            | 


    @negative
    Scenario Outline: As a user, I can't continue checkout an product because empty postal code

        Given I am clear input data value
        When I am providing firstname: <firstname> , lastname: <lastname>, and empty postal code:
        When I click continue button
        Then I should see error message: <message>

        Examples:
            | firstname | lastname | postal | message                                 | 
            | Tester    | Akbar    | 1123   | Error: Postal Code is required          | 

