import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

type ButtonCategory = "default" | "danger" | "primary"
type ButtonSize = "small" | "default" | "large"

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  @Input() category: ButtonCategory = "default";
  @Input() size: ButtonSize = "default";
  @Input() disabled: boolean = false;

  @Output() onClick = new EventEmitter<void>();

  ngOnInit(): void {
  }

}