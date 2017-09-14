import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCheckboxModule,
  MdRadioModule,
  MdInputModule,
  MdDialogModule
} from '@angular/material';

import {routing} from './todo.routes';

import {TodoComponent} from './todo.component';
import {TodoFooterComponent} from './todo-footer/todo-footer.component';
import {TodoHeaderComponent} from './todo-header/todo-header.component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {TodoService} from './todo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdCardModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCheckboxModule,
    MdRadioModule,
    MdInputModule,
    MdDialogModule,
    routing
  ],
  declarations: [
    TodoComponent,
    TodoFooterComponent,
    TodoHeaderComponent,
    TodoItemComponent
  ],
  providers: [
    {provide: 'todoService', useClass: TodoService}
  ]
})

export class TodoModule {
  id: String;
  desc: String;
  state: TodoState;
}

export enum TodoState {
  BACKLOG,
  INPROGREESS,
  DONE,
  CLOSE
}
