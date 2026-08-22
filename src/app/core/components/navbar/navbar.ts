import { NgOptimizedImage } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, NgOptimizedImage, RouterLink, RouterLinkActive],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {}
