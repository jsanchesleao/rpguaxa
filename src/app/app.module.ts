import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { ButtonComponent } from './shared/button/button.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerItemComponent } from './player-list/player-item/player-item.component';
import { PlayerEditComponent } from './player-list/player-edit/player-edit.component';
import { GameEventsComponent } from './game-events/game-events.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { RadioGroupComponent } from './shared/radio-group/radio-group.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    ButtonComponent,
    PlayerListComponent,
    PlayerItemComponent,
    PlayerEditComponent,
    GameEventsComponent,
    DiceRollComponent,
    RadioGroupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
