import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreNewsComponent } from './explore-news.component';

describe('ExploreNewsComponent', () => {
  let component: ExploreNewsComponent;
  let fixture: ComponentFixture<ExploreNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
