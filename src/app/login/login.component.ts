import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  username: String = '';
  password: String = '';

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * 登录
   */
  login(formValue) {
    console.log(formValue);
  }
}
