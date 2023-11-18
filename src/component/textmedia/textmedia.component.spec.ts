import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextmediaComponent } from './textmedia.component';

describe('TextmediaComponent', () => {
  let component: TextmediaComponent;
  let fixture: ComponentFixture<TextmediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextmediaComponent]
    });
    fixture = TestBed.createComponent(TextmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
