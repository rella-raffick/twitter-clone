import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleFeedComponent } from './middle-feed.component';

describe('MiddleFeedComponent', () => {
  let component: MiddleFeedComponent;
  let fixture: ComponentFixture<MiddleFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiddleFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiddleFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
