Feature: BattleSnake Move

    Scenario: Move
        Given I make a POST request to "http://localhost:3000/move" with:
            | status | "moving..." |
        When I receive a response
        Then response should have a status 200
        And response should have the following data:
            | move | "up" |
