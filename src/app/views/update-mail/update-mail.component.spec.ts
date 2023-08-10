import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMailComponent } from './update-mail.component';

describe('UpdateMailComponent', () => {
  let component: UpdateMailComponent;
  let fixture: ComponentFixture<UpdateMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
