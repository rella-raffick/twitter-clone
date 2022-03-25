import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationAllComponent } from './notification-all.component';

describe('NotificationAllComponent', () => {
  let component: NotificationAllComponent;
  let fixture: ComponentFixture<NotificationAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
