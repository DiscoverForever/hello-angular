import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-filter',
  templateUrl: './todo-filter.component.html',
  styleUrls: ['./todo-filter.component.sass']
})
export class TodoFilterComponent implements OnInit {
  private currentTargetId = 0;
  @Output() onTargetClick = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  handleClick(id: number) {
    this.currentTargetId = id;
    this.onTargetClick.emit(id >= 1 ? id - 1 : null);
  }
}
