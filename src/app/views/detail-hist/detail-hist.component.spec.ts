import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailHistComponent } from './detail-hist.component';

describe('DetailHistComponent', () => {
  let component: DetailHistComponent;
  let fixture: ComponentFixture<DetailHistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailHistComponent]
    });
    fixture = TestBed.createComponent(DetailHistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
