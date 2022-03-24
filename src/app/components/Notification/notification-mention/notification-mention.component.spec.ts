import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationMentionComponent } from './notification-mention.component';

describe('NotificationMentionComponent', () => {
  let component: NotificationMentionComponent;
  let fixture: ComponentFixture<NotificationMentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationMentionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
