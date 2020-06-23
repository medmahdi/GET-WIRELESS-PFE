import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesCandidatsComponent } from './liste-des-candidats.component';

describe('ListeDesCandidatsComponent', () => {
  let component: ListeDesCandidatsComponent;
  let fixture: ComponentFixture<ListeDesCandidatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeDesCandidatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeDesCandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
