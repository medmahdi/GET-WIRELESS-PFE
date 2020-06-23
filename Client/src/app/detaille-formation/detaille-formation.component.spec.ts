import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailleFormationComponent } from './detaille-formation.component';

describe('DetailleFormationComponent', () => {
  let component: DetailleFormationComponent;
  let fixture: ComponentFixture<DetailleFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailleFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailleFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
