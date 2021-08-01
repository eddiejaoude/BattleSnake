Feature: BattleSnake Start

    Scenario: Start
        Given I make a POST request to "http://localhost:3000/start" with:
            | status | "starting..." |
        When I receive a response
        Then response should have a status 200
        And response should have the following data:
            | status | "starting..." |
