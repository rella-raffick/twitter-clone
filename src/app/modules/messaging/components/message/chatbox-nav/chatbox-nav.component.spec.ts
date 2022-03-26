import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboxNavComponent } from './chatbox-nav.component';

describe('ChatboxNavComponent', () => {
  let component: ChatboxNavComponent;
  let fixture: ComponentFixture<ChatboxNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatboxNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboxNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
