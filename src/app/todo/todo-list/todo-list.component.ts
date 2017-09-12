import { Component, OnInit, Input } from '@angular/core';
import {TodoModule} from '../todo.module';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: TodoModule[];
  constructor() { }

  ngOnInit() {
  }

}
