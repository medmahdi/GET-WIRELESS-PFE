import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartieCandidatComponent } from './partie-candidat.component';

describe('PartieCandidatComponent', () => {
  let component: PartieCandidatComponent;
  let fixture: ComponentFixture<PartieCandidatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartieCandidatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartieCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
