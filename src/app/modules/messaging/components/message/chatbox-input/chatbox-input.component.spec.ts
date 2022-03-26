import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboxInputComponent } from './chatbox-input.component';

describe('ChatboxInputComponent', () => {
  let component: ChatboxInputComponent;
  let fixture: ComponentFixture<ChatboxInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatboxInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
