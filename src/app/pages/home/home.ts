
import {
  Component,
  HostBinding,
  HostListener,
  OnInit,
  OnDestroy
} from '@angular/core';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { ScreenshotCarousel } from '../../core/components/screenshot-carousel/screenshot-carousel';

interface Project {
  name: string;
  technologies: string[];
  category: string;
  description: string;
  images: string[];
}

@Component({
  selector: 'app-home',
  imports: [
    LucideAngularModule,
    // RouterLink,
    ScreenshotCarousel
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {

  readonly currentYear = new Date().getFullYear();

  mobileMenuOpen = false;
  darkMode = true;
  activeFilter = 'All';

  // Carousel settings
  currentProjectIndex = 0;
  projectsPerView = 2;
  isCarouselPaused = false;

  private carouselInterval: ReturnType<typeof setInterval> | undefined;

  readonly filters = ['All', 'Web Apps', 'Dashboards'];

  readonly projects: Project[] = [
    {
      name: 'Fleet Analytics Dashboard',
      description: 'A fleet analytics platform with monitoring and reporting dashboards.',
      technologies: ['Angular', 'FastAPI', 'PostgreSQL'],
      category: 'Dashboards',
      images: [
        'images/projects/nybble/wb-nybble.png',
        'images/projects/nybble/dashboard.png',
        'images/projects/nybble/home.png',
      ]
    },
    {
      name: 'Online Store',
      description: 'A responsive e-commerce application.',
      category: 'Web Apps',
      technologies: ['Angular', 'Tailwind CSS', 'NgRx'],
      images: [
        'assets/projects/store/home.png',
        'assets/projects/store/products.png',
        'assets/projects/store/details.png',
        'assets/projects/store/cart.png'
      ]
    },
    {
      name: 'Online Store',
      description: 'A responsive e-commerce application.',
      category: 'Web Apps',
      technologies: ['Angular', 'Tailwind CSS', 'NgRx'],
      images: [
        'assets/projects/store/home.png',
        'assets/projects/store/products.png',
        'assets/projects/store/details.png',
        'assets/projects/store/cart.png'
      ]
    },
    {
      name: 'Online Store',
      description: 'A responsive e-commerce application.',
      category: 'Web Apps',
      technologies: ['Angular', 'Tailwind CSS', 'NgRx'],
      images: [
        'assets/projects/store/home.png',
        'assets/projects/store/products.png',
        'assets/projects/store/details.png',
        'assets/projects/store/cart.png'
      ]
    }
  ];

  get visibleProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return this.projects;
    }

    return this.projects.filter(
      project => project.category === this.activeFilter
    );
  }

  get totalProjectPages(): number {
    return Math.ceil(this.visibleProjects.length / this.projectsPerView);
  }

  get currentProjectPage(): number {
    return Math.floor(this.currentProjectIndex / this.projectsPerView) + 1;
  }

  @HostBinding('class.dark')
  get isDark(): boolean {
    return this.darkMode;
  }

  ngOnInit(): void {
    this.updateProjectsPerView();
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    this.updateProjectsPerView();
    this.currentProjectIndex = 0;
    this.startCarousel();
  }

  private updateProjectsPerView(): void {
    this.projectsPerView = window.innerWidth < 768 ? 1 : 2;
  }

  private startCarousel(): void {
    this.stopCarousel();

    if (this.visibleProjects.length <= this.projectsPerView) {
      return;
    }

    this.carouselInterval = setInterval(() => {
      if (!this.isCarouselPaused) {
        this.nextProject();
      }
    }, 1500);
  }

  private stopCarousel(): void {
    if (this.carouselInterval !== undefined) {
      clearInterval(this.carouselInterval);
      this.carouselInterval = undefined;
    }
  }

  pauseCarousel(): void {
    this.isCarouselPaused = true;
  }

  resumeCarousel(): void {
    this.isCarouselPaused = false;
  }

  nextProject(): void {
    const totalProjects = this.visibleProjects.length;

    if (totalProjects <= this.projectsPerView) {
      return;
    }

    this.currentProjectIndex += this.projectsPerView;

    if (this.currentProjectIndex >= totalProjects) {
      this.currentProjectIndex = 0;
    }
  }

  previousProject(): void {
    const totalProjects = this.visibleProjects.length;

    if (totalProjects <= this.projectsPerView) {
      return;
    }

    this.currentProjectIndex -= this.projectsPerView;

    if (this.currentProjectIndex < 0) {
      this.currentProjectIndex =
        Math.floor((totalProjects - 1) / this.projectsPerView) *
        this.projectsPerView;
    }
  }

  toggleTheme(): void {
    this.darkMode = !this.darkMode;
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.currentProjectIndex = 0;
    this.startCarousel();
  }
}
