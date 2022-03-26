import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboxTextComponent } from './chatbox-text.component';

describe('ChatboxTextComponent', () => {
  let component: ChatboxTextComponent;
  let fixture: ComponentFixture<ChatboxTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatboxTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboxTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
