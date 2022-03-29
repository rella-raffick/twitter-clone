import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreTrendingComponent } from './explore-trending.component';

describe('ExploreTrendingComponent', () => {
  let component: ExploreTrendingComponent;
  let fixture: ComponentFixture<ExploreTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
