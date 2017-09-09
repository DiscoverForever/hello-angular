import {InMemoryDbService} from 'angular-in-memory-web-api';
import {TodoModule} from './todo.module';

export class InMemoryTodoDbService implements InMemoryDbService {
  createDb() {
    const todos: TodoModule[] = [
      {id: 'f823b191-7799-438d-8d78-fcb1e468fc78', desc: 'Getting up', state: 0},
      {id: 'c316a3bf-b053-71f9-18a3-0073c7ee3b76', desc: 'Go to school', state: 1}
    ];
    return {todos};
  }
}