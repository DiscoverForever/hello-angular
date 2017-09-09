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
