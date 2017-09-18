import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {TodoService} from '../todo.service';
import {TodoModule} from '../todo.module';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.sass']
})
export class TodoHeaderComponent implements OnInit {
  public desc: String;
  @Output() onAddTodo = new EventEmitter<TodoModule>();

  constructor(private service: TodoService) {
  }

  ngOnInit() {
  }

  async addTodo() {
    if (!this.desc) {
      return;
    }
    const todo = await this.service.addTodo(this.desc);
    this.desc = '';
    this.onAddTodo.emit(todo);
  }

}
