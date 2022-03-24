import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtweetComponent } from './newtweet.component';

describe('NewtweetComponent', () => {
  let component: NewtweetComponent;
  let fixture: ComponentFixture<NewtweetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtweetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtweetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
