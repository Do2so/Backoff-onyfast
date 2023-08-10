import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLienComponent } from './details-lien.component';

describe('DetailsLienComponent', () => {
  let component: DetailsLienComponent;
  let fixture: ComponentFixture<DetailsLienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
