import { Component, OnInit, Input } from '@angular/core';
import {Todo} from '../../domain/entities';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass']
})
export class TodoListComponent implements OnInit {
  @Input() todoList: Todo[];
  constructor() { }

  ngOnInit() {
  }

}
