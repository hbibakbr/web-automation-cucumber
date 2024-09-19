@regression
Feature: Add to Cart Functional Tests Saucedemo
    As a user
    I want add product to the cart and remove product from the cart

    @positive
    Scenario: As a user, I can adding an item to the cart
        Given I am on inventory page
        When I add a product to the cart
        Then The cart icon should display badge with 1 item

    @positive    
    Scenario: As a user, I can remove an from to the cart
        Given I have added a product on the cart
        When I remove product from the cart
        Then The cart badges is no longer displayed
    
    @positive
    Scenario: As a user, I can adding an item to the cart on detail product page
        Given I am on inventory page
        And I am access detail product page
        When I add a product to the cart on detail product page
        Then The cart icon should display badge with 1 item

    @positive
    Scenario: As a user, I can remove an from to the cart on detail page
        Given I am access detail product page
        And I have added a product on the cart
        When I remove product from the cart on detail product page
        Then The cart badges is no longer displayed