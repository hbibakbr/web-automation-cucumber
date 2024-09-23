Feature: Checkout Functional Test Saucedemo
    As a user,
    I have a sauce labs backpack on the cart
    and I want to checkout sauce labs backpack.

    Scenario: As a user, I can checkout an item from the cart page
        Given I am on cart page
        Given I already have an item to checkout from the cart
        When I click checkout an product
        Then I should be on the checkout page

    Scenario: As a user, I can continue place an order checkout product
        Given I am on the checkout page
        When I am providing firstname: <firstname>, lastname: <lastname>, and postal code: <postal>
        When I click checkout button
        Then I should be on the overview page

        Examples:
        | firstname | lastname | postal |
        | Tester    | Akbar    | 1123   |

