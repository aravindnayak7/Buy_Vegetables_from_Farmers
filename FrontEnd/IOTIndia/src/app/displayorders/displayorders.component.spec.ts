import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayordersComponent } from './displayorders.component';

describe('DisplayordersComponent', () => {
  let component: DisplayordersComponent;
  let fixture: ComponentFixture<DisplayordersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayordersComponent]
    });
    fixture = TestBed.createComponent(DisplayordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
