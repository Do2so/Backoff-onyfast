import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TronconComponent } from './troncon.component';

describe('TronconComponent', () => {
  let component: TronconComponent;
  let fixture: ComponentFixture<TronconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TronconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TronconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
