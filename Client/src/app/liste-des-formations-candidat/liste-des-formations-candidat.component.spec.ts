import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesFormationsCandidatComponent } from './liste-des-formations-candidat.component';

describe('ListeDesFormationsCandidatComponent', () => {
  let component: ListeDesFormationsCandidatComponent;
  let fixture: ComponentFixture<ListeDesFormationsCandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesFormationsCandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesFormationsCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
