import { Component, OnInit, Input} from '@angular/core';
import { GameState } from '../shared/game.model';
import { GameService } from '../shared/game.service';
import { DiceRollService } from '../dice-roll/dice-roll.service';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  constructor(private gameService: GameService, private diceRollService: DiceRollService) { }

  @Input() gameState: GameState;

  ngOnInit(): void {
  }

  onStartGame() {
    this.gameService.changeGameState("started");
  }

  onEditGame() {
    this.gameService.changeGameState("editing");
  }

  onResumeGame() {
    this.gameService.changeGameState("started");
  }

  onFinishGame() {
    if(window.confirm('Realmente deseja finalizar a partida?')) {
      this.gameService.changeGameState("finished");
    }
  }

  onRequestRoll() {
    this.diceRollService.requestDiceRoll();
  }

  onRestartGame() {
    this.gameService.resetGame();
  }

}
