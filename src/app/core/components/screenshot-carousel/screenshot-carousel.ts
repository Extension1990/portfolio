import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-screenshot-carousel',
  standalone: true,
  templateUrl: './screenshot-carousel.html',
  styleUrl: './screenshot-carousel.css',
})
export class ScreenshotCarousel {
  @Input() images: string[] = [];
  @Input() projectName = 'Project screenshots';

  currentIndex = signal(0);

  next(): void {
    this.currentIndex.update(index =>
      (index + 1) % this.images.length
    );
  }

  previous(): void {
    this.currentIndex.update(index =>
      (index - 1 + this.images.length) % this.images.length
    );
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}