import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLogoComponent } from './todo-logo.component';

describe('TodoLogoComponent', () => {
  let component: TodoLogoComponent;
  let fixture: ComponentFixture<TodoLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
