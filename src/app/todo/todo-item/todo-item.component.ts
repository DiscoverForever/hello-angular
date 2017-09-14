import { Component, OnInit, Input } from '@angular/core';
import {TodoModule, TodoState} from '../todo.module';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass'],
  providers: [TodoService]
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoModule;
  constructor(private service: TodoService) { }

  ngOnInit() {
  }

  async updateTodo(id: String, desc: String, state: Number) {
    const todo: TodoModule = {
      id: id,
      desc: desc,
      state: state as TodoState
    };
    await this.service.updateTodo(todo);
  }
}
