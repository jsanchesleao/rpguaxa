import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {

  @Input() items: {value: string, text: string}[];
  @Input() name: string;
  @Input() title: string;
  @Input() selectedItem: {value: string, text: string};
  @Output() valueSelected = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  onChangeSelected(item: {value: string, text: string}) {
    this.valueSelected.emit(item.value);
  }

}
