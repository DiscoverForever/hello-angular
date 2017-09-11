import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {TodoModule, TodoState} from './todo.module';

import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todoList: TodoModule[] = [];
  desc: String = '';
  currentTargetId: Number = 0;

  constructor(private service: TodoService, public dialog: MdDialog) {
  }

  async ngOnInit() {
    await this.getTodos();
  }

  async getTodos(obj?: Object) {
    if (obj) {
      this.todoList = await this.service.getTodos(obj);
      this.currentTargetId = obj['state'] + 1;
      return;
    }
    this.currentTargetId = 0;
    this.todoList = await this.service.getTodos(obj);
  }

  async addTodo() {
    if (!this.desc) {
      return;
    }
    await this.service.addTodo(this.desc);
    await this.getTodos();
    this.desc = '';
  }

  async updateTodo(id: String, desc: String, state: Number) {
    const todo: TodoModule = {
      id: id,
      desc: desc,
      state: state as TodoState
    };
    await this.service.updateTodo(todo);
    await this.getTodos();
  }

  async deleteTodo(id: String) {
    await this.service.deleteTodoById(id);
    await this.getTodos();
  }

  openDialog(): void {
    this.dialog.open(TodoComponent, {data: {name: 'test'}});
  }

}
