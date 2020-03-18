import { Component, OnInit } from '@angular/core';
import { GameEventService } from '../shared/game-event.service';
import { GameEvent } from '../shared/game-event.model';

@Component({
  selector: 'app-game-events',
  templateUrl: './game-events.component.html',
  styleUrls: ['./game-events.component.scss']
})
export class GameEventsComponent implements OnInit {

  events: GameEvent[];

  constructor(private gameEventService: GameEventService) { }

  ngOnInit(): void {
    this.events = this.gameEventService.getEvents();
    this.gameEventService.eventsChanged.subscribe(
      (events: GameEvent[]) => this.events = events
    )
  }

}
