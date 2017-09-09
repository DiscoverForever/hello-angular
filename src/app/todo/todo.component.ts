import {Component, OnInit} from '@angular/core';
import {TodoService} from './todo.service';
import {TodoModule} from './todo.module';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {
  todoList: TodoModule[] = [];
  desc: String = '';
  constructor(private service: TodoService) {
  }

  ngOnInit() {
  }

  async addTodo() {
    const newTodo = await this.service.addTodo(this.desc);
    this.todoList.push(newTodo);
    this.desc = '';
  }


}
