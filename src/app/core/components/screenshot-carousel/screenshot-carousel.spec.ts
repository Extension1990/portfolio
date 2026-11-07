import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenshotCarousel } from './screenshot-carousel';

describe('ScreenshotCarousel', () => {
  let component: ScreenshotCarousel;
  let fixture: ComponentFixture<ScreenshotCarousel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenshotCarousel],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenshotCarousel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
