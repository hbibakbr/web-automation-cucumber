Feature: Add to Cart Functional Tests Saucedemo

    Scenario: As a user, I can adding an item to the cart
        Given I am logged into saucedemo as standard_user
        And I am on the inventory page
        When I add a product to the cart
        Then The product should be added to the cart
        And The cart icon should display badge with 1 item
        
    Scenario: As a user, I remove an from to the cart
        Given The product should be added to the cart
        And The cart icon should display badge with 1 item
        When I remove product from the cart
        Then The cart badges is no longer displayed