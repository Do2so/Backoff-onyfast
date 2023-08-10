import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmailComponent } from './addmail.component';

describe('AddmailComponent', () => {
  let component: AddmailComponent;
  let fixture: ComponentFixture<AddmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
