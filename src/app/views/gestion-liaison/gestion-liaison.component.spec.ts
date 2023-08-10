import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLiaisonComponent } from './gestion-liaison.component';

describe('GestionLiaisonComponent', () => {
  let component: GestionLiaisonComponent;
  let fixture: ComponentFixture<GestionLiaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionLiaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLiaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
