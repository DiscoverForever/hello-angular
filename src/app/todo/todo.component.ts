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

  constructor(private service: TodoService, public dialog: MdDialog) {
  }

  async ngOnInit() {
    await this.getTodos();
  }

  async getTodos() {
    this.todoList = await this.service.getTodos();
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
