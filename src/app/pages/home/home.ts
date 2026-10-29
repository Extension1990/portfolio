import { Component, HostBinding } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  stack: string[];
  visual: string;
}

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  readonly currentYear = new Date().getFullYear();

  mobileMenuOpen = false;
  darkMode = true;
  activeFilter = 'All';

  readonly filters = ['All', 'Web Apps', 'Dashboards'];

  readonly projects: Project[] = [
    {
      number: '01',
      title: 'Fleet Analytics',
      category: 'Dashboards',
      description:
        'A data-rich fleet platform for monitoring performance, events and finance.',
      stack: ['Angular', 'TypeScript', 'FastAPI'],
      visual: 'fleet',
    },
    {
      number: '02',
      title: 'Online Store',
      category: 'Web Apps',
      description:
        'A responsive shopping experience with product discovery and a streamlined cart.',
      stack: ['Angular', 'Tailwind CSS', 'NgRx'],
      visual: 'store',
    },
    {
      number: '03',
      title: 'Operations Dashboard',
      category: 'Dashboards',
      description:
        'Clear, responsive data views that turn complex operational metrics into insight.',
      stack: ['Angular', 'RxJS', 'REST API'],
      visual: 'ops',
    },
  ];

  get visibleProjects(): Project[] {
    if (this.activeFilter === 'All') {
      return this.projects;
    }

    return this.projects.filter(
      (project) => project.category === this.activeFilter
    );
  }

  @HostBinding('class.dark')
  get isDark(): boolean {
    return this.darkMode;
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
  }
}
