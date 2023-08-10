import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTronconComponent } from './add-troncon.component';

describe('AddTronconComponent', () => {
  let component: AddTronconComponent;
  let fixture: ComponentFixture<AddTronconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTronconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTronconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
