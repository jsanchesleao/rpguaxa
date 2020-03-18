import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DiceRollService } from './dice-roll.service';
import { DiceCheck, DiceCheckType } from './dice-check.model';
import { GameService } from '../shared/game.service';
import { Player } from '../shared/player.model';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.scss']
})
export class DiceRollComponent implements OnInit {

  diceCheck: DiceCheck;
  players: Player[];

  @ViewChild('playerSelect') playerSelectInput: ElementRef;

  difficultyLevels = [
    {value: 3, text: 'Fácil'}, 
    {value: 2, text: 'Normal'}, 
    {value: 1, text: 'Difícil'}
  ]

  actionTypes = [
    {value: "physical", text: "Física"},
    {value: "not-physical", text: "Não Física"}
  ]

  constructor(private diceRollService: DiceRollService, 
              private gameService: GameService) { 
  }

  ngOnInit(): void {
    this.diceRollService.rollRequested.subscribe(
      (diceCheck: DiceCheck) => this.diceCheck = diceCheck
    )
    this.players = this.gameService.getPlayers()
    this.gameService.playersChanged.subscribe(
      (players: Player[]) => this.players = players
    )
  }

  private getSelectedPlayer(): Player {
    const playerId = this.playerSelectInput.nativeElement.value;
    return this.players[playerId];
  }

  onSelectPlayer() {
    const player = this.getSelectedPlayer();
    if (player) {
      this.diceCheck.attribute = player.attribute;
    }
    else {
      this.diceCheck.attribute = null;
    }
  }

  getSelectedDifficulty() {
    return this.difficultyLevels.find( level => level.value === this.diceCheck.rolls);
  }

  getSelectedActionType() {
    return this.actionTypes.find( actionType => actionType.value === this.diceCheck.checkType);
  }

  onSelectDifficulty(difficulty: string) {
    this.diceCheck.rolls = Number.parseInt(difficulty);
  }

  onSelectCheckType(checkType: string) {
    this.diceCheck.checkType = <DiceCheckType>checkType;
  }

  isRollEnabled() {
    return this.diceCheck.attribute && this.diceCheck.checkType && this.diceCheck.rolls;
  }

  onRoll() {
    this.diceRollService.roll(this.diceCheck, this.getSelectedPlayer().name);
    this.diceCheck = null;
  }

  onCancel() {
    this.diceCheck = null;
  }

}
