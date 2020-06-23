import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartieAdmnAcComponent } from './partie-admn-ac.component';

describe('PartieAdmnAcComponent', () => {
  let component: PartieAdmnAcComponent;
  let fixture: ComponentFixture<PartieAdmnAcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartieAdmnAcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartieAdmnAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
