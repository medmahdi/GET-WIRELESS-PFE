import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesFormationsFormateurComponent } from './liste-des-formations-formateur.component';

describe('ListeDesFormationsFormateurComponent', () => {
  let component: ListeDesFormationsFormateurComponent;
  let fixture: ComponentFixture<ListeDesFormationsFormateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesFormationsFormateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesFormationsFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
