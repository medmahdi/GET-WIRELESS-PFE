import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheFormationComponent } from './recherche-formation.component';

describe('RechercheFormationComponent', () => {
  let component: RechercheFormationComponent;
  let fixture: ComponentFixture<RechercheFormationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechercheFormationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
