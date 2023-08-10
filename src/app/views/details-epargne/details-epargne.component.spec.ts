import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEpargneComponent } from './details-epargne.component';

describe('DetailsEpargneComponent', () => {
  let component: DetailsEpargneComponent;
  let fixture: ComponentFixture<DetailsEpargneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEpargneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsEpargneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
