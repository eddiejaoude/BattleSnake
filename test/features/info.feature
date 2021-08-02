Feature: BattleSnake Info

    Scenario: Information
        Given I make a GET request to "http://localhost:3000"
        When I receive a response
        Then response should have a status 200
        And response should have the following object:
            | apiversion | "1"        |
            | author     | "EddieHub" |
            | color      | "#ff0000"  |
            | head       | "default"  |
            | tail       | "default"  |
