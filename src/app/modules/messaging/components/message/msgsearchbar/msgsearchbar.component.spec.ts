import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgsearchbarComponent } from './msgsearchbar.component';

describe('MsgsearchbarComponent', () => {
  let component: MsgsearchbarComponent;
  let fixture: ComponentFixture<MsgsearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgsearchbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgsearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
