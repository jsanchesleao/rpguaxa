import { Injectable, EventEmitter } from '@angular/core';
import { Game, GameState } from './game.model';
import { Player } from './player.model';
import { GameEventService } from './game-event.service';

@Injectable({providedIn: 'root'})
export class GameService {
  
  private game: Game = new Game();

  gameStateChanged = new EventEmitter<GameState>();
  playersChanged = new EventEmitter<Player[]>();

  constructor(private gameEventService: GameEventService){}

  gameStarted(): boolean {
    return this.game.gameState !== 'not-started';
  }

  addPlayer(player: Player): number {
    if (this.gameStarted()){
      this.gameEventService.recordAddPlayerEvent(player.name);
    }

    this.game.players.push(player);
    this.playersChanged.emit(this.getPlayers());
    return this.game.players.length - 1;
  }

  changeGameState(newState: GameState): void {
    if (this.game.gameState === 'not-started' && newState === 'started') {
      this.gameEventService.recordSimpleMessageEvent('A partida foi iniciada');
    }
    if (newState === 'finished') {
      this.gameEventService.recordSimpleMessageEvent('A partida foi finalizada');
    }
    this.game.gameState = newState;
    this.gameStateChanged.emit(newState);
  }

  getGameState(): GameState {
    return this.game.gameState;
  }

  isGameStateEditable(gameState: GameState): boolean {
    return gameState === 'editing' || gameState === 'not-started';
  }

  getPlayers(): Player[] {
    return this.game.players.slice();
  }

  changePlayer(id: number, player: Player): void {
    if (this.gameStarted()){
      this.gameEventService.recordPlayerChangeEvent(this.game.players[id], player);
    }
    this.game.players[id] = player;
    this.playersChanged.emit(this.getPlayers());
  }

  removePlayer(id: number): void {
    if (this.gameStarted()){
      this.gameEventService.recordRemovePlayerEvent(this.game.players[id].name);
    }
    this.game.players.splice(id, 1);
    this.playersChanged.emit(this.getPlayers());
  }

  resetGame() {
    this.game = new Game();
    this.gameStateChanged.emit(this.game.gameState);
    this.playersChanged.emit(this.game.players.slice());
    this.gameEventService.clear()
  }

}