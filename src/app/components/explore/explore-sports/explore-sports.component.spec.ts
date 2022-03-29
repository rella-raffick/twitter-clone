import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSportsComponent } from './explore-sports.component';

describe('ExploreSportsComponent', () => {
  let component: ExploreSportsComponent;
  let fixture: ComponentFixture<ExploreSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
