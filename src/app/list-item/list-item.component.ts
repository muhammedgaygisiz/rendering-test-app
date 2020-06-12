import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemComponent {

  @Input()
  value: number;

  constructor() { }

  rendering() {
    console.log("Rendering: ", this.value);
  }

}
