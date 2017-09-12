import { Component, OnInit, Input } from '@angular/core';
import {TodoModule} from '../todo.module';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModule;
  constructor() { }

  ngOnInit() {
  }

}
