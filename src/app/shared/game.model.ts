import { Player } from './player.model';
import { GameEvent } from './game-event.model';

export type GameState = "not-started" | "started" | "editing"| "editing-player" | "finished";

export class Game {

  gameState: GameState = "not-started";
  players: Player[] = [];

}