interface Board {
  height: number;
  width: number;
  food: Position[];
  hazards: Position[];
  snakes: BattleSnake[];
}
