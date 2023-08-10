import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistotiqueActiviteComponent } from './histotique-activite.component';

describe('HistotiqueActiviteComponent', () => {
  let component: HistotiqueActiviteComponent;
  let fixture: ComponentFixture<HistotiqueActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistotiqueActiviteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistotiqueActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
