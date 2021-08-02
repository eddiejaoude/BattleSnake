Feature: BattleSnake Move

    Scenario: Move
        Given I prepare a POST request with property "game" and with object:
            | id      | "totally-unique-game-id"                    |
            | ruleset | { "name": "standard", "version": "v1.2.3" } |
            | timeout | 500                                         |
        And I prepare a POST request with property "turn" and value "11"
        And I prepare a POST request with property "board" and with object:
            | height | 11 |
            | width  | 11 |
        And I prepare a POST request with property "board.food" and with collection:
            | {"x": 5, "y": 5} |
            | {"x": 9, "y": 0} |
            | {"x": 2, "y": 6} |
        And I prepare a POST request with property "board.hazards" and with collection:
            | {"x": 1, "y": 1} |
        And I prepare a POST request to collection "board.snakes" and with object:
            | id      | "snake-508e96ac-94ad-11ea-bb37" |
            | name    | "My Snake"                      |
            | health  | 54                              |
            | latency | "111"                           |
            | head    | {"x": 0, "y": 0}                |
            | length  | 3                               |
            | shout   | "why are we shouting??"         |
            | squad   | ""                              |
        And I prepare a POST request with property "board.snakes[0].body" and with collection:
            | {"x": 0, "y": 0} |
            | {"x": 1, "y": 0} |
            | {"x": 2, "y": 0} |
        And I prepare a POST request with property "you" and with object:
            | id      | "snake-508e96ac-94ad-11ea-bb37" |
            | name    | "My Snake"                      |
            | health  | 54                              |
            | latency | "111"                           |
            | head    | {"x": 0, "y": 0}                |
            | length  | 3                               |
            | shout   | "why are we shouting??"         |
            | squad   | ""                              |
        And I prepare a POST request with property "you.body" and with collection:
            | {"x": 5, "y": 5} |
            | {"x": 9, "y": 0} |
            | {"x": 2, "y": 6} |
        And I make a POST request to "http://localhost:3000/move"
        When I receive a response
        Then response should have a status 200
        And response should have the following object:
            | move | "up" |
