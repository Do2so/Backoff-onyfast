import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFibreComponent } from './update-fibre.component';

describe('UpdateFibreComponent', () => {
  let component: UpdateFibreComponent;
  let fixture: ComponentFixture<UpdateFibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFibreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
