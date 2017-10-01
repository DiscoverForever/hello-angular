import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {Todo, TodoState} from '../domain/entities';

import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [];
  currentTargetId = 0;

  constructor(private service: TodoService, public dialog: MdDialog) {
  }

  async ngOnInit() {
    await this.getTodos();
  }

  async getTodos(state?: number) {
    if (state && state >= 0) {
      this.currentTargetId = state + 1;
      this.todoList = await this.service.getTodos({state: state});
    } else {
      this.currentTargetId = 0;
      this.todoList = await this.service.getTodos();
    }
  }


  openDialog(): void {
    this.dialog.open(TodoComponent, {data: {name: 'test'}});
  }

  async onAddTodo(todo: Todo) {
    await this.getTodos();
  }

  async onDeleteTodo() {
    await this.getTodos();
  }

  async onUpdateTodo(todo: Todo) {
    await this.getTodos();
  }
}
