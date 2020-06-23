import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultBodyComponent } from './default-body.component';

describe('DefaultBodyComponent', () => {
  let component: DefaultBodyComponent;
  let fixture: ComponentFixture<DefaultBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
