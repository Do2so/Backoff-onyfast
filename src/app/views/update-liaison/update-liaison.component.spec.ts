import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLiaisonComponent } from './update-liaison.component';

describe('UpdateLiaisonComponent', () => {
  let component: UpdateLiaisonComponent;
  let fixture: ComponentFixture<UpdateLiaisonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLiaisonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLiaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
