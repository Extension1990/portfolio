import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/layout/layout').then((c) => c.Layout),
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard').then((c) => c.Dashboard),
      },
      {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile').then((c) => c.Profile),
      },
      {
        path: 'projects',
        loadComponent: () => import('./pages/projects/projects').then((c) => c.Projects),
      },
    ]
  }
];