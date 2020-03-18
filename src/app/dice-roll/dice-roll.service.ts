import { DiceCheck } from './dice-check.model';
import { EventEmitter, Injectable } from '@angular/core';
import { DiceCheckResult } from './dice-check-result.model';
import { GameEventService } from '../shared/game-event.service';

@Injectable({providedIn: 'root'})
export class DiceRollService{

  rollRequested = new EventEmitter<DiceCheck>();

  constructor(private gameEventService: GameEventService){}

  requestDiceRoll() {
    this.rollRequested.emit(new DiceCheck());
  }

  roll(diceCheck: DiceCheck, playerName: string) {
    const result = new DiceCheckResult();
    result.playerName = playerName;
    result.attribute = diceCheck.attribute;
    result.actionType = diceCheck.checkType;
    for(let i = 0; i<diceCheck.rolls; i++) {
      result.rolls.push( this.rollDie() )
    }
    this.gameEventService.recordDiceRollEvent(result);
  }

  private rollDie() : number {
    return Math.ceil(Math.random() * 6);
  }

}