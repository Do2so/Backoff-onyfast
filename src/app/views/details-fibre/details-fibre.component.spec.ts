import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsFibreComponent } from './details-fibre.component';

describe('DetailsFibreComponent', () => {
  let component: DetailsFibreComponent;
  let fixture: ComponentFixture<DetailsFibreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsFibreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsFibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
