import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryTodoDbService} from './todo/todo-data';
import {routing} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MdButtonModule,
  MdCardModule,
  MdMenuModule,
  MdToolbarModule,
  MdIconModule,
  MdCheckboxModule,
  MdRadioModule,
  MdInputModule,
  MdDialogModule
} from '@angular/material';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {TodoComponent} from './todo/todo.component';
import {TodoFooterComponent} from './todo/todo-footer/todo-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TodoComponent,
    TodoFooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryTodoDbService),
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdCheckboxModule,
    MdRadioModule,
    MdInputModule,
    MdDialogModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
