import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPretComponent } from './details-pret.component';

describe('DetailsPretComponent', () => {
  let component: DetailsPretComponent;
  let fixture: ComponentFixture<DetailsPretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPretComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
