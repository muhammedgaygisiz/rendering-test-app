import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input()
  my_array: {value:number}[] = [];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    if(this.my_array.length === 0) {
      this.my_array.push({value: 1});
      
      return;
    }

    const nextValue = this.my_array[this.my_array.length-1].value+1;
    this.my_array.push({value: nextValue});
  }

  removeItem() {
    this.my_array.pop();
  }

}
