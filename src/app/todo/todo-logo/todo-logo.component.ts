import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-logo',
  templateUrl: './todo-logo.component.html',
  styleUrls: ['./todo-logo.component.sass']
})
export class TodoLogoComponent implements OnInit {
  @Input() text: string = 'Todo';
  constructor() { }

  ngOnInit() {
  }

}
