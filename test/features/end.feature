Feature: BattleSnake End

    Scenario: End
        Given I make a POST request to "http://localhost:3000/end" with:
            | status | "ending..." |
        When I receive a response
        Then response should have a status 200
        And response should have the following data:
            | status | "ending..." |
