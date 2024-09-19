Feature: Add to Cart Functional Tests Saucedemo

    Scenario: As a user, I can adding an item to the cart
        Given I am on inventory page
        When I add a product to the cart
        Then The cart icon should display badge with 1 item
        
    Scenario: As a user, I can success remove an from to the cart
        Given I have added a product on the cart
        When I remove product from the cart
        Then The cart badges is no longer displayed