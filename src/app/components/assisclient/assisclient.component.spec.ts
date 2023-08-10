import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssisclientComponent } from './assisclient.component';

describe('AssisclientComponent', () => {
  let component: AssisclientComponent;
  let fixture: ComponentFixture<AssisclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssisclientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssisclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
