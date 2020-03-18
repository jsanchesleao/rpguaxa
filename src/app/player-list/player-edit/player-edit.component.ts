import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Player, PlayerAttribute } from 'src/app/shared/player.model';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.scss']
})
export class PlayerEditComponent implements OnInit {

  @Input() player: Player;
  @Output() playerEdited = new EventEmitter<Player>();

  @ViewChild('playerName') playerNameInput: ElementRef;
  @ViewChild('playerAttribute') playerAttributeInput: ElementRef;
  @ViewChild('playerDescription') playerDescriptionInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  getFormData() {
    return {
      name: this.playerNameInput.nativeElement.value,
      attribute: <PlayerAttribute>Number(this.playerAttributeInput.nativeElement.value),
      description: this.playerDescriptionInput.nativeElement.value
    }
  }

  onConfirm() { 
    let formData = this.getFormData();
    this.playerEdited.emit(
      new Player(
        formData.name,
        formData.attribute,
        formData.description
      )
    );
  }

}
