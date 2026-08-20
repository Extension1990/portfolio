import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/layout/layout').then((m) => m.Layout),
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard').then((m) => m.Dashboard),
  },
  {
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile').then((m) => m.Profile),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
];