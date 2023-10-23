import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAgeComponent } from './view-age.component';

describe('ViewAgeComponent', () => {
  let component: ViewAgeComponent;
  let fixture: ComponentFixture<ViewAgeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewAgeComponent]
    });
    fixture = TestBed.createComponent(ViewAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
