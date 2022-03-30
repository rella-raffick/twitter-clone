import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreAllComponent } from './explore-all.component';

describe('ExploreAllComponent', () => {
  let component: ExploreAllComponent;
  let fixture: ComponentFixture<ExploreAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
