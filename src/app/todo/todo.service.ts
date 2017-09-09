import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {TodoModule} from './todo.module';
import {UUID} from 'angular2-uuid';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {
  private API_URL = 'api/todos';
  private HEADER: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  /**
   * 添加代办事物
   */
  addTodo(desc: String): Promise<TodoModule> {
    const todo: TodoModule = {
      id: UUID.UUID(),
      desc: desc,
      completed: false
    };
    return this.http.post(this.API_URL, todo, this.HEADER).toPromise()
      .then(res => res.json().data as TodoModule)
      .catch(error => {
        console.log('data error');
        throw error;
    });
  }
}
