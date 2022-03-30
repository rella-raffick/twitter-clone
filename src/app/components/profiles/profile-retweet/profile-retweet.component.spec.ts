import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRetweetComponent } from './profile-retweet.component';

describe('ProfileRetweetComponent', () => {
  let component: ProfileRetweetComponent;
  let fixture: ComponentFixture<ProfileRetweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileRetweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileRetweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
