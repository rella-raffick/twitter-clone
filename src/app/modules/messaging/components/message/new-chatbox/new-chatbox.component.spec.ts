import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChatboxComponent } from './new-chatbox.component';

describe('NewChatboxComponent', () => {
  let component: NewChatboxComponent;
  let fixture: ComponentFixture<NewChatboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewChatboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChatboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
