export class Todo {
  id: String;
  desc: String;
  state: TodoState;
  userId?: number;
}

export class User {
  id: number;
  username: string;
  password: string;
}
export enum TodoState {
  BACKLOG,
  INPROGREESS,
  DONE,
  CLOSE
}