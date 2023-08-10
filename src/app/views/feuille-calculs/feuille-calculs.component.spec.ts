import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleCalculsComponent } from './feuille-calculs.component';

describe('FeuilleCalculsComponent', () => {
  let component: FeuilleCalculsComponent;
  let fixture: ComponentFixture<FeuilleCalculsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeuilleCalculsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuilleCalculsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
