import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() name: string;
  @Input() value: number;
  @Input() progress: number;
  @Output() addValue: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
