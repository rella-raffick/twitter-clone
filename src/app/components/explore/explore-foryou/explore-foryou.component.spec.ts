import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreForyouComponent } from './explore-foryou.component';

describe('ExploreForyouComponent', () => {
  let component: ExploreForyouComponent;
  let fixture: ComponentFixture<ExploreForyouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreForyouComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreForyouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
