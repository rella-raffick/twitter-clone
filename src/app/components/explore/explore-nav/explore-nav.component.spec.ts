import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreNavComponent } from './explore-nav.component';

describe('ExploreNavComponent', () => {
  let component: ExploreNavComponent;
  let fixture: ComponentFixture<ExploreNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
