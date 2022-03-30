import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreCovidComponent } from './explore-covid.component';

describe('ExploreCovidComponent', () => {
  let component: ExploreCovidComponent;
  let fixture: ComponentFixture<ExploreCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
