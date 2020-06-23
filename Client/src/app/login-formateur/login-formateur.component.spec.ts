import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormateurComponent } from './login-formateur.component';

describe('LoginFormateurComponent', () => {
  let component: LoginFormateurComponent;
  let fixture: ComponentFixture<LoginFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
