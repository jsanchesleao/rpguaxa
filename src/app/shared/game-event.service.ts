import { GameEvent, PlayerCreatedEvent, PlayerChangedEvent, PlayerRemovedEvent, SimpleMessageEvent, DiceCheckEvent } from './game-event.model';
import { Injectable, EventEmitter } from '@angular/core';
import { Player, PlayerAttribute } from './player.model';
import { DiceCheckResult } from '../dice-roll/dice-check-result.model';

@Injectable({providedIn: 'root'})
export class GameEventService {
  private events: GameEvent[] = [];
  eventsChanged = new EventEmitter<GameEvent[]>();

  private recordEvent(event: GameEvent): void {
    this.events.unshift(event);
    this.eventsChanged.emit(this.events.slice());
  }

  getEvents() {
    return this.events.slice();
  }

  recordAddPlayerEvent(playerName: string): void{
    this.recordEvent(new GameEvent(
      new PlayerCreatedEvent(playerName)
    ));
  }

  recordPlayerChangeEvent(oldPlayer: Player, newPlayer: Player): void {
    let nameChanged: string = null;
    let attributeChanged: [PlayerAttribute, PlayerAttribute] = null;
    let descriptionChanged: string = null;
    if (oldPlayer.name !== newPlayer.name){
      nameChanged = newPlayer.name;
    }
    if (oldPlayer.attribute !== newPlayer.attribute) {
      attributeChanged = [oldPlayer.attribute, newPlayer.attribute];
    }
    if (oldPlayer.description !== newPlayer.description) {
      descriptionChanged = newPlayer.description;
    }

    if (nameChanged !== null || attributeChanged !== null || descriptionChanged !== null) {
      this.recordEvent(
        new GameEvent(new PlayerChangedEvent(
          oldPlayer.name, nameChanged, attributeChanged, descriptionChanged
        ))
      );
    }

  }

  recordRemovePlayerEvent(playerName: string): void {
    this.recordEvent(
      new GameEvent( new PlayerRemovedEvent(playerName) )
    );
  }

  recordSimpleMessageEvent(text: string) {
    this.recordEvent(
      new GameEvent( new SimpleMessageEvent(text) )
    )
  }

  recordDiceRollEvent(diceCheckResult: DiceCheckResult) {
    this.recordEvent(
      new GameEvent( new DiceCheckEvent(diceCheckResult) )
    );
  }

  clear() {
    this.events = [];
    this.eventsChanged.emit([]);
  }
}