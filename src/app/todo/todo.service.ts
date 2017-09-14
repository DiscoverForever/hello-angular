import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {TodoModule, TodoState} from './todo.module';
import {UUID} from 'angular2-uuid';
import 'rxjs/add/operator/toPromise';
import QueryString from 'query-string';


@Injectable()
export class TodoService {
  private API_URL = 'api/todos';
  private HEADER: Headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  /**
   * 添加todo
   * @param {String} desc
   * @returns {Promise<TodoModule>}
   */
  async addTodo(desc: String): Promise<TodoModule> {
    const todo: TodoModule = {
      id: UUID.UUID(),
      desc: desc,
      state: TodoState.BACKLOG
    };
    const res = await this.http.post(this.API_URL, todo, this.HEADER).toPromise();
    return res.json().data as TodoModule;
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
   * @param {TodoModule} todo
   * @returns {Promise<TodoModule>}
   */
  async updateTodo(todo: TodoModule): Promise<TodoModule> {
    await this.http.put(`${this.API_URL}/${todo.id}`, todo).toPromise();
    return todo;
  }

  /**
   * 获取todos
   * @param {Object} obj
   * @returns {Promise<TodoModule[]>}
   */
  async getTodos(obj?: Object): Promise<TodoModule[]> {
    let url = this.API_URL;
    if (obj) {
      url += `?${QueryString.stringify(obj)}`;
    }
    const res = await this.http.get(url).toPromise();
    return res.json().data as TodoModule[];
  }


}
