import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypingProgressBarComponent } from './typing-progress-bar.component';

describe('TypingProgressBarComponent', () => {
  let component: TypingProgressBarComponent;
  let fixture: ComponentFixture<TypingProgressBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypingProgressBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypingProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
