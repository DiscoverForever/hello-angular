import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Todo, TodoState} from '../domain/entities';
import {UUID} from 'angular2-uuid';
import 'rxjs/add/operator/toPromise';
import QueryString from 'query-string';


@Injectable()
export class TodoService {
  // private API_URL = 'api/todos';
  private API_URL = 'http://localhost:3000/todos';
  private HEADER: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  /**
   * 添加todo
   * @param {String} desc
   * @returns {Promise<Todo>}
   */
  async addTodo(desc: String): Promise<Todo> {
    const todo: Todo = {
      id: UUID.UUID(),
      desc: desc,
      state: TodoState.BACKLOG
    };
    const res = await this.http.post(this.API_URL, todo, this.HEADER).toPromise();
    return res.json() as Todo;
  }

  /**
   * 删除todo
   * @param {String} id
   * @returns {Promise<void>}
   */
  async deleteTodoById(id: String): Promise<void> {
    try {
      await this.http.delete(`${this.API_URL}/${id}`, this.HEADER).toPromise();
    } catch (error) {
      console.log('delete error');
      throw error;
    }
    return;
  }

  /**
   * 更新todo
   * @param {Todo} todo
   * @returns {Promise<Todo>}
   */
  async updateTodo(todo: Todo): Promise<Todo> {
    await this.http.put(`${this.API_URL}/${todo.id}`, todo).toPromise();
    return todo;
  }

  /**
   * 获取todos
   * @param {Object} obj
   * @returns {Promise<Todo[]>}
   */
  async getTodos(obj?: Object): Promise<Todo[]> {
    let url = this.API_URL;
    if (obj) {
      url += `?${QueryString.stringify(obj)}`;
    }
    const res = await this.http.get(url).toPromise();
    console.log(res);
    return res.json() as Todo[];
  }


}
