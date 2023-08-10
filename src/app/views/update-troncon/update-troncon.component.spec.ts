import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTronconComponent } from './update-troncon.component';

describe('UpdateTronconComponent', () => {
  let component: UpdateTronconComponent;
  let fixture: ComponentFixture<UpdateTronconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTronconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTronconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
