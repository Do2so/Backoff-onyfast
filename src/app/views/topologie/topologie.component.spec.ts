import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopologieComponent } from './topologie.component';

describe('TopologieComponent', () => {
  let component: TopologieComponent;
  let fixture: ComponentFixture<TopologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopologieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
