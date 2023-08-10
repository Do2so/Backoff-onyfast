import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLiaisonComponent } from './details-liaison.component';

describe('DetailsLiaisonComponent', () => {
  let component: DetailsLiaisonComponent;
  let fixture: ComponentFixture<DetailsLiaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLiaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLiaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
