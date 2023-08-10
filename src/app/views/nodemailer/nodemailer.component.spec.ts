import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodemailerComponent } from './nodemailer.component';

describe('NodemailerComponent', () => {
  let component: NodemailerComponent;
  let fixture: ComponentFixture<NodemailerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodemailerComponent]
    });
    fixture = TestBed.createComponent(NodemailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
