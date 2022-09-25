import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardMonitorComponent } from './keyboard-monitor.component';

describe('KeyboardMonitorComponent', () => {
  let component: KeyboardMonitorComponent;
  let fixture: ComponentFixture<KeyboardMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyboardMonitorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyboardMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
