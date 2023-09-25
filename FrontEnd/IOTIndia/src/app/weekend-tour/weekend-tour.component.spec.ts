import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendTourComponent } from './weekend-tour.component';

describe('WeekendTourComponent', () => {
  let component: WeekendTourComponent;
  let fixture: ComponentFixture<WeekendTourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekendTourComponent]
    });
    fixture = TestBed.createComponent(WeekendTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
