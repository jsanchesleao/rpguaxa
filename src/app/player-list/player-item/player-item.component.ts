import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from 'src/app/shared/player.model';
import { GameState } from 'src/app/shared/game.model';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.scss']
})
export class PlayerItemComponent implements OnInit {

  @Input() player: Player;
  @Input() id: number;
  @Output() editClicked = new EventEmitter<number>();
  @Output() removeClicked = new EventEmitter<number>();

  @Input() gameState: GameState;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  onEdit() {
    this.gameService.changeGameState('editing-player');
    this.editClicked.emit(this.id);
  }

  onRemove() {
    this.removeClicked.emit(this.id);
  }

  isEditable() {
    return this.gameService.isGameStateEditable(this.gameState);
  }

}
