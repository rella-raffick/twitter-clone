import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfeedComponent } from './displayfeed.component';

describe('DisplayfeedComponent', () => {
  let component: DisplayfeedComponent;
  let fixture: ComponentFixture<DisplayfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
