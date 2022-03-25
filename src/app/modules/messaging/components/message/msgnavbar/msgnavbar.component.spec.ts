import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgnavbarComponent } from './msgnavbar.component';

describe('MsgnavbarComponent', () => {
  let component: MsgnavbarComponent;
  let fixture: ComponentFixture<MsgnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
