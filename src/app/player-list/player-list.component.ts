import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../shared/game.service';
import { Player } from '../shared/player.model';
import { GameState } from '../shared/game.model';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  editing: number;
  @Input() gameState: GameState;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.players = this.gameService.getPlayers();
    this.gameService.playersChanged.subscribe(
      (players: Player[]) => this.players = players
    )
  }

  onAddNewPlayer() {
    this.editing = this.gameService.addPlayer( new Player('Name', 2, '') );
  }

  onEditClicked(id: number) {
    this.editing = id;
  }

  onRemoveClicked(id: number) {
    if(window.confirm(`Realmente deseja remover [${this.players[id].name}]?`)) {
      this.gameService.removePlayer(id);
    }
  }

  onEditFinished(player: Player) {
    this.gameService.changePlayer(
      this.editing,
      player  
    );
    this.editing = null;
    this.gameService.changeGameState('editing');
  }

  canAddPlayer(): boolean {
    return this.gameService.isGameStateEditable(this.gameState);
  }

}
