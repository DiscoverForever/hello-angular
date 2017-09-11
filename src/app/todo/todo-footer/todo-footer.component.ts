import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.sass']
})
export class TodoFooterComponent implements OnInit {
  @Input() itemCount: Number;
  constructor() { }

  ngOnInit() {
  }

}
