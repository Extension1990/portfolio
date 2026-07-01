import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideAngularModule, LogOut, User, ShoppingCart, FolderKanban, Github, Twitter, Mail, MapPin, Phone, ShoppingBag, Star } from 'lucide-angular';
import { provideNgToast } from 'ng-angular-popup';
import { importProvidersFrom } from '@angular/core';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideNgToast({
      duration: 2500,
      position: 'toaster-top-right',
      minWidth: 350,
    }),
    importProvidersFrom(
      LucideAngularModule.pick({ LogOut, User, ShoppingCart, FolderKanban, Github, Twitter, Mail, MapPin, Phone, ShoppingBag, Star })
    )
  ]
};
