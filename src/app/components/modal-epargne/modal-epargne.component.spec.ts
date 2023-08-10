import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEpargneComponent } from './modal-epargne.component';

describe('ModalEpargneComponent', () => {
  let component: ModalEpargneComponent;
  let fixture: ComponentFixture<ModalEpargneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEpargneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEpargneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
