import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPretComponent } from './modal-pret.component';

describe('ModalPretComponent', () => {
  let component: ModalPretComponent;
  let fixture: ComponentFixture<ModalPretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
