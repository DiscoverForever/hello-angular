import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TodoComponent } from './todo/todo.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'todos',
    component: TodoComponent
  }

];

export const routing = RouterModule.forRoot(routes);
