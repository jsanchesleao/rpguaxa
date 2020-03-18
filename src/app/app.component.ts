import { Component, OnInit } from '@angular/core';
import { GameState } from './shared/game.model';
import { Player } from './shared/player.model';
import { GameService } from './shared/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  gameState: GameState;

  constructor(private gameService: GameService){}

  ngOnInit() {
    this.gameState = this.gameService.getGameState();
    this.gameService.gameStateChanged.subscribe(
      (gameState: GameState) => this.gameState = gameState
    );

    this.gameService.addPlayer(
      new Player('Guaxa', 3, 'um guaxinim')
    )
  }

}
