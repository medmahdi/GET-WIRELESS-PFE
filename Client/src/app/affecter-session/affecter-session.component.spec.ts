import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterSessionComponent } from './affecter-session.component';

describe('AffecterSessionComponent', () => {
  let component: AffecterSessionComponent;
  let fixture: ComponentFixture<AffecterSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffecterSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
