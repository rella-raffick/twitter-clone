import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreEntertainmentComponent } from './explore-entertainment.component';

describe('ExploreEntertainmentComponent', () => {
  let component: ExploreEntertainmentComponent;
  let fixture: ComponentFixture<ExploreEntertainmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreEntertainmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreEntertainmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
