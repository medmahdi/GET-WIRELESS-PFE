import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartieAdminComponent } from './partie-admin.component';

describe('PartieAdminComponent', () => {
  let component: PartieAdminComponent;
  let fixture: ComponentFixture<PartieAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartieAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartieAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
