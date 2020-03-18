import { PlayerAttribute } from './player.model';
import { DiceCheckResult } from '../dice-roll/dice-check-result.model';

export type GameEventType = SimpleMessageEvent | PlayerCreatedEvent | PlayerChangedEvent | PlayerRemovedEvent

export class GameEvent {
  
  eventType: GameEventType;
  timestamp: string;

  constructor(eventType: GameEventType) {
    this.eventType = eventType;
    this.timestamp = this.getFormattedTimestamp();
  }

  private getFormattedTimestamp() {
    const t = new Date();
    const hours = `${t.getHours()}`;
    const minutes = `${t.getMinutes() < 10 ? '0' : ''}${t.getMinutes()}`
    const seconds = `${t.getSeconds() < 10 ? '0' : ''}${t.getSeconds()}`
    return `${hours}:${minutes}:${seconds}`;
  }

}

export class PlayerCreatedEvent {
  typeName = 'PlayerCreatedEvent';
  playerName: string;
  constructor(playerName: string){
    this.playerName = playerName
  }
}

export class PlayerRemovedEvent {
  typeName = 'PlayerRemovedEvent';
  playerName: string;
  constructor(playerName: string){
    this.playerName = playerName
  }
}

export class PlayerChangedEvent {
  typeName = 'PlayerChangedEvent';

  playerName: string = null;
  nameChanged: string = null;
  attributeChanged: [PlayerAttribute, PlayerAttribute] = null;
  descriptionChanged: string = null;

  constructor(playerName: string,
              nameChanged: string, 
              attributeChanged: [PlayerAttribute, PlayerAttribute], 
              descriptionChanged: string) {
    this.playerName = playerName;
    this.nameChanged = nameChanged;
    this.attributeChanged = attributeChanged;
    this.descriptionChanged = descriptionChanged;
  }
}

export class DiceCheckEvent {
  typeName = 'DiceCheckEvent';
  successes: number;
  critical: number;
  playerName: string;
  attribute: number;
  actionType: string;
  rolls: number[];

  constructor(diceCheckResult: DiceCheckResult) {
    this.successes = diceCheckResult.countSuccesses();
    this.critical = diceCheckResult.countCritical();
    this.playerName = diceCheckResult.playerName;
    this.attribute = diceCheckResult.attribute;
    this.actionType = diceCheckResult.actionType;
    this.rolls = diceCheckResult.rolls;
  }
}

export class SimpleMessageEvent {
  typeName = 'SimpleMessageEvent'
  text: string;
  constructor(text: string) {
    this.text = text;
  }
}