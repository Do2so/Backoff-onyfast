import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTronconComponent } from './details-troncon.component';

describe('DetailsTronconComponent', () => {
  let component: DetailsTronconComponent;
  let fixture: ComponentFixture<DetailsTronconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTronconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsTronconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
