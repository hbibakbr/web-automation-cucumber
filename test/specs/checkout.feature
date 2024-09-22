Feature: Checkout Functional Test Saucedemo

    Scenario: As a user, I can checkout an item from the cart page
        Given I am on cart page
        Given I already have an item to checkout from the cart
        When I click checkout an product
        Then I should be on the checkout page

    Scenario: As a user, I can continue an checkout product
        Given I am on the checkout page
        When I am providing firstname lastname and postal code
        When I click checkout button
        Then I should be on the confirmation page
        Then I click finish button
        Then I am succesfully checkout an product
        Then I should see a successful message